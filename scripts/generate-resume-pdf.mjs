import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputPath = join(process.cwd(), 'public', 'marlen-franto-resume.pdf');

const sections = [
  {
    title: 'Marlen Franto',
    lines: [
      'Senior Flutter & Mobile Engineer',
      'Chennai, India | Open to India-based and global roles',
      'marlenfranto0716@gmail.com | https://www.marlenfranto.com',
      'LinkedIn: https://www.linkedin.com/in/marlen-franto-bb2571158/',
      'GitHub: https://github.com/Marlenfranto',
    ],
  },
  {
    title: 'Summary',
    lines: [
      'Senior mobile engineer with 7+ years building production-grade Flutter, Android and iOS applications.',
      'Works across offline-first systems, GIS, BLE, cloud, native integrations, planning and ETA reporting,',
      'stakeholder updates, risk management, follow-ups and release coordination.',
    ],
  },
  {
    title: 'Leadership & Delivery',
    lines: [
      'Client communication; requirements discovery; project planning; sprint planning.',
      'Estimation and ETA management; stakeholder reporting; risk and dependency management.',
      'Cross-functional coordination; client demonstrations; release planning; follow-ups and action tracking.',
    ],
  },
  {
    title: 'Experience',
    lines: [
      'Mako IT Lab - Senior Software Engineer, January 2024 to Present',
      'Leads Flutter, Android and iOS delivery for connected hardware, catalog, construction and community products.',
      'Prepares delivery plans, milestones, implementation scope and release-readiness checkpoints.',
      'Coordinates with backend, design, QA and product stakeholders through sprint planning and reviews.',
      '',
      'OPTX - Senior Software Engineer, July 2023 to January 2024',
      'Developed Flutter modules for player profiles, live floor monitoring, reservations and API workflows.',
      'Participated in sprint planning, story estimation and critical-module sequencing.',
      '',
      'CI Global Technologies - Software Engineer, May 2021 to June 2023',
      'Built Flutter sports-management products including SPAID, Timekeeper Console and live score streaming.',
      'Supported sprint planning, story estimation, release preparation and QA coordination.',
      '',
      'RSalesArm Pvt Ltd - Mobile Application Developer, May 2019 to May 2021',
      'Developed Android and Flutter products across digital learning, POS, field operations and support workflows.',
      'Worked with stakeholders on UI behavior, offline data, RBAC, push notifications and operational flows.',
    ],
  },
  {
    title: 'Selected Case Studies',
    lines: [
      'Perfecta - Flutter smart-grill companion app with VIAM SDK, Bluetooth and Wi-Fi protocols.',
      'Eurogrip - Offline-first Flutter tyre catalog with SQFlite, Serverpod and Remote Config.',
      'Pegasus - Construction project management app with offline workflows and product integrations.',
      'Hidden Kingdoms - Native Android Jetpack and iOS SwiftUI app with spatial audio and location tracking.',
      'OPTX - Flutter app for player profiles, live floor monitoring and casino operations workflows.',
    ],
  },
  {
    title: 'Skills',
    lines: [
      'Mobile: Flutter, Dart, Android SDK, Kotlin, Java, SwiftUI, Jetpack, iOS delivery.',
      'Architecture: Offline-first, Clean Architecture, BLoC, Riverpod, MVVM, SQLite and synchronization.',
      'Integrations: REST APIs, Firebase, ArcGIS, BLE, CameraX, OpenCV, PDF, payments and cloud services.',
      'Delivery: CI/CD, Google Play, App Store, GitHub, Bitbucket, Azure DevOps, Jira and client reviews.',
    ],
  },
  {
    title: 'Education',
    lines: [
      'B.C.A, Don Bosco College, Yelagiri Hills - 2016 to 2019.',
      'HSC in Computer Science, Don Bosco Higher Secondary School - 2016.',
      'SSLC, Little Flower Higher Secondary School - 2014.',
    ],
  },
];

const escapePdfText = (value) =>
  value
    .replaceAll('\\', '\\\\')
    .replaceAll('(', '\\(')
    .replaceAll(')', '\\)');

const textOps = [];
let y = 760;

for (const section of sections) {
  if (y < 90) break;
  textOps.push('/F2 16 Tf');
  textOps.push(`72 ${y} Td (${escapePdfText(section.title)}) Tj`);
  y -= 22;
  textOps.push('/F1 10 Tf');
  for (const line of section.lines) {
    if (y < 60) break;
    if (line) textOps.push(`72 ${y} Td (${escapePdfText(line)}) Tj`);
    y -= line ? 15 : 8;
  }
  y -= 8;
}

const stream = `BT\n${textOps.join('\n')}\nET`;

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
];

let pdf = '%PDF-1.4\n';
const offsets = [0];

for (const [index, object] of objects.entries()) {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
}

const xrefOffset = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += '0000000000 65535 f \n';
for (let index = 1; index < offsets.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Root 1 0 R /Size ${objects.length + 1} >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

writeFileSync(outputPath, pdf);
console.log(`Generated ${outputPath}`);

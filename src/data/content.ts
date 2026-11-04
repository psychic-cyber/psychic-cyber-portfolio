export const profile = {
  name: 'Zaeem Ahmad',
  brand: 'Psychic Cyber',
  tagline: 'Think Like an Attacker. Engineer Like a Defender.',
  brandStatement: 'Exploring vulnerabilities. Engineering intelligence. Strengthening digital security.',
  roles: ['Cybersecurity', 'Offensive Security', 'Applied AI'],
  identities: [
    'Graduate Cybersecurity Student',
    'Offensive Security Enthusiast',
    'Applied AI & Machine Learning Practitioner',
    'Network Forensics',
    'Adversary Emulation',
    'Security Research',
  ],
  email: 'zaeemzaz01@gmail.com',
  github: 'https://github.com/psychic-cyber',
  linkedin: 'https://www.linkedin.com/in/zaeemahmad-zaz/',
  aboutParagraphs: [
    'I am a Graduate Cybersecurity student at King Fahd University of Petroleum and Minerals (KFUPM), with a strong interest in Offensive Security, Adversary Emulation, Digital Forensics, and Applied Artificial Intelligence.',
    'My interests focus on understanding how vulnerabilities are discovered, how adversaries operate, and how intelligent security solutions can improve threat detection and defense validation.',
    'With an academic foundation in Computer Science and previous experience in Artificial Intelligence research, I enjoy combining programming, machine learning, and cybersecurity to develop practical security tools and research-oriented projects.',
  ],
};

export type SkillGroup = {
  id: string;
  title: string;
  icon: 'crosshair' | 'network' | 'code' | 'brain' | 'server';
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'offensive',
    title: 'Offensive Security',
    icon: 'crosshair',
    items: ['Penetration Testing', 'Vulnerability Assessment', 'Metasploit', 'Privilege Escalation', 'MITRE ATT&CK'],
  },
  {
    id: 'network',
    title: 'Network Security & Forensics',
    icon: 'network',
    items: ['Nmap', 'Wireshark', 'Network Traffic Analysis', 'PCAP Analysis', 'DNS Threat Detection'],
  },
  {
    id: 'programming',
    title: 'Programming & Development',
    icon: 'code',
    items: ['Python', 'Bash', 'FastAPI', 'Git'],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: 'brain',
    items: ['Machine Learning', 'Scikit-learn', 'PyTorch', 'LightGBM', 'Ollama', 'Data Science'],
  },
  {
    id: 'systems',
    title: 'Systems & Infrastructure',
    icon: 'server',
    items: ['Kali Linux', 'Linux Administration', 'Docker', 'VirtualBox'],
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  summary: string;
  tags: string[];
  contributions: string[];
  mitre?: string[];
};

export const projects: Project[] = [
  {
    id: 'gencyberai',
    number: '01',
    title: 'GenCyberAI',
    subtitle: 'Automated Cyber Range & Vulnerability Simulation Platform',
    date: 'November 2026 – Present',
    summary:
      'A containerized cyber range platform for dynamically provisioning vulnerable web environments and simulating adversarial security testing.',
    tags: ['FastAPI', 'Docker Compose', 'Ollama', 'OWASP Top 10', 'PDF Reporting'],
    contributions: [
      'Built a containerized cyber range using FastAPI and Docker Compose.',
      'Parsed natural-language prompts into JSON blueprints using local Ollama LLMs.',
      'Injected OWASP Top 10 vulnerabilities including SQL Injection and XSS.',
      'Implemented automated adversary verification probes.',
      'Generated PDF audit reports containing CVSS scores and code fixes.',
    ],
  },
  {
    id: 'nettriage',
    number: '02',
    title: 'NetTriage',
    subtitle: 'Automated Network Traffic Forensics & PCAP Threat Triage Platform',
    date: 'October 2026 – Present',
    summary:
      'A forensic triage platform that turns raw packet captures into scored, reviewable threat telemetry.',
    tags: ['Python', 'Scapy', 'FastAPI', 'Chart.js', 'Shannon Entropy'],
    contributions: [
      'Developed a PCAP forensic triage engine using Python, Scapy, and FastAPI.',
      'Implemented heuristic detection for cleartext credentials and TCP SYN scans.',
      'Integrated Shannon Entropy algorithms for detecting suspicious DNS tunneling and DGA patterns.',
      'Developed a dashboard using Chart.js for threat scoring and telemetry.',
      'Added CSV export functionality.',
    ],
  },
  {
    id: 'ransomware',
    number: '03',
    title: 'Linux Ransomware Detection & Defense Validation',
    subtitle: 'Detection & Defense Validation Against Simulated Linux Ransomware Behaviors',
    date: 'October 2026 – Present',
    summary:
      'An isolated, two-VM lab for validating how well Linux defenses detect and contain ransomware-style adversary behavior.',
    tags: ['MITRE ATT&CK', 'Auditd', 'GTFOBins', 'sudoers hardening', 'Python'],
    contributions: [
      'Built an isolated dual-VM test environment.',
      'Simulated adversary behaviors mapped to MITRE ATT&CK techniques T1548.003, T1486, and T1490.',
      'Developed a Python ransomware behavior simulation harness.',
      'Tested GTFOBins-based privilege escalation scenarios.',
      'Implemented NOEXEC sudoers policy hardening.',
      'Configured Linux Auditd rules and immutable backup protection.',
    ],
    mitre: ['T1548.003', 'T1486', 'T1490'],
  },
  {
    id: 'adversarial-malware',
    number: '04',
    title: 'Adversarial Malware Detection Using Machine Learning',
    subtitle: 'Machine-learning malware classification and robustness evaluation',
    date: 'October 2025',
    summary:
      'A malware classifier built with LightGBM, evaluated for weaknesses against adversarial and evasive samples.',
    tags: ['LightGBM', 'Machine Learning', 'Adversarial ML', 'Malware Analysis'],
    contributions: [
      'Developed a malware classification system using LightGBM.',
      'Trained models using large-scale malware datasets.',
      'Analyzed model robustness against adversarial and evasive malware patterns.',
      'Evaluated security limitations in traditional ML-based detection.',
    ],
  },
  {
    id: 'facial-expression',
    number: '05',
    title: "Facial Expression Recognition with Treisman's Attention Model",
    subtitle: 'Attention-based facial expression recognition on micro-expression datasets',
    date: 'April 2024 – May 2024',
    summary:
      'An attention-based model for facial expression recognition, trained and evaluated on CASME2, SAMM v3, and SMIC datasets.',
    tags: ['Deep Learning', 'Attention Model', 'CASME2', 'SAMM v3', 'SMIC'],
    contributions: [
      'Implemented facial expression recognition.',
      'Worked with CASME2, SAMM v3, and SMIC datasets.',
      'Applied an attention-based model.',
      'Evaluated model performance using Kaggle.',
    ],
  },
];

export const experience = {
  role: 'Research Assistant — Artificial Intelligence',
  organization: 'TheHexa Town',
  location: 'Lahore, Pakistan',
  duration: 'December 2023 – January 2025',
  responsibilities: [
    'Data collection and preprocessing.',
    'Machine learning model training.',
    'Literature reviews.',
    'AI experimentation and implementation.',
    'Technical documentation.',
  ],
};

export const education = [
  {
    degree: 'MS Cybersecurity',
    institution: 'King Fahd University of Petroleum and Minerals (KFUPM)',
    location: 'Dhahran, Saudi Arabia',
    period: 'July 2026 – Present',
    current: true,
  },
  {
    degree: 'BS Computer Science',
    institution: 'The University of Lahore',
    location: 'Sargodha, Pakistan',
    period: 'November 2021 – June 2025',
    current: false,
  },
];

export const certifications = [
  { title: 'Cybersecurity Essentials Certificate' },
  { title: 'Ethical Hacking Certificate' },
  { title: 'Endpoint Security Certificate' },
];

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;

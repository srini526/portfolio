export const ragStages = [
  ['01', 'Source Ingestion', 'Documents, media and web'],
  ['02', 'Content Extraction', 'Extract text and audio'],
  ['03', 'Text Processing', 'Clean and normalize content'],
  ['04', 'Chunking', 'Searchable text segments'],
  ['05', 'BGE-M3 Embeddings', 'Cloudflare Workers AI'],
  ['06', 'FAISS Indexing', 'Vector-based knowledge search'],
  ['07', 'LangGraph RAG', 'Retrieve relevant context'],
  ['08', 'LLM via Groq', 'Grounded answers with citations'],
]

export const rag = {
  title: 'RAG-Based AI Notebook',
  slug: 'rag-assistant',
  category: 'RAG / LLM / Agentic AI',

  desc: 'An AI-powered knowledge workspace that transforms documents, lecture materials and other supported sources into searchable knowledge, answers questions with source citations, and generates personalized study resources.',

  tech: [
    'Python',
    'Flask',
    'React',
    'Vite',
    'Tailwind CSS',
    'LangChain',
    'LangGraph',
    'FAISS',
    'BGE-M3',
    'Cloudflare Workers AI',
    'Groq',
    'Whisper',
    'SQLAlchemy',
    'SQLite',
    'PostgreSQL',
    'Server-Sent Events',
  ],

  points: [
    'Multi-source ingestion processes supported documents, audio, video, YouTube links and web content.',
    'BGE-M3 embeddings through Cloudflare Workers AI power semantic search using FAISS.',
    'LangGraph coordinates retrieval and answer-generation workflows, with retrieval refinement when needed.',
    'Source-grounded answers include citations that help users verify information against original materials.',
    'Study Studio generates study guides, FAQs, flashcards, quizzes, timelines and mind maps.',
    'React frontend integrates with a Flask REST API and streams responses using Server-Sent Events.',
  ],

  query: [
    ['User query', 'Ask a question about notebook sources'],
    ['Query processing', 'Prepare the question for retrieval'],
    ['Semantic retrieval', 'Find relevant passages using FAISS'],
    ['Context assembly', 'Collect the best-matching source passages'],
    ['LLM generation', 'Generate an answer using retrieved context'],
    ['Answer', 'Return the response with source citations'],
  ],

  study: [
    [
      'Problem',
      'Finding specific information across multiple documents, lecture materials and web pages can be time-consuming. General-purpose AI responses may also lack clear grounding in the user’s own sources.',
    ],
    [
      'Approach',
      'Create an AI knowledge workspace that ingests supported content, indexes it for semantic retrieval, and uses relevant passages to answer questions and generate learning materials.',
    ],
    [
      'Architecture',
      'The application combines a React and Vite frontend, Flask REST API, content-ingestion workflows, BGE-M3 embeddings, FAISS retrieval, LangChain integrations and LangGraph orchestration.',
    ],
    [
      'Data Flow',
      'Source content is extracted and processed into text chunks. BGE-M3 generates embeddings through Cloudflare Workers AI, and FAISS indexes the vectors for efficient similarity-based retrieval.',
    ],
    [
      'Retrieval',
      'A user query is used to retrieve relevant passages from the indexed knowledge base. The selected context is passed to the language model to support source-grounded answers.',
    ],
    [
      'Agentic Workflow',
      'LangGraph coordinates selected ingestion and conversational workflows. Where configured, retrieval can be evaluated and queries refined before answer generation.',
    ],
    [
      'LLM Integration',
      'Groq provides language-model inference, while Cloudflare Workers AI handles BGE-M3 embeddings. Whisper supports audio transcription. These services work together with the retrieval pipeline to support the notebook experience.',
    ],
    [
      'Study Studio',
      'The application generates learning resources from notebook content, including briefing documents, study guides, FAQs, timelines, mind maps, flashcards and quizzes.',
    ],
    [
      'Tech Stack',
      'Python, Flask, React, Vite, Tailwind CSS, LangChain, LangGraph, FAISS, BGE-M3, Cloudflare Workers AI, Groq, Whisper, SQLAlchemy, SQLite, PostgreSQL and Server-Sent Events.',
    ],
    [
      'Deployment',
      'Live application: https://ragbasedainotebook.vercel.app/. GitHub repository: https://github.com/srini526/RAG_Based_AI_Notebook. The frontend is hosted on Vercel and connects to a Flask backend.',
    ],
    [
      'Outcome',
      'An end-to-end AI knowledge workspace combining source ingestion, semantic retrieval, question answering with citations and AI-generated study materials. No unverified performance benchmarks are claimed.',
    ],
    [
      'What I Learned',
      'Building RAG pipelines, integrating embedding and LLM providers, orchestrating workflows with LangGraph, connecting React to Flask, streaming model responses and maintaining source context throughout answer generation.',
    ],
  ],
}
export const brain = {
  title: 'Brain Tumor Detection System', slug: 'brain-tumor', category: 'Deep Learning / Computer Vision',
  desc: 'A deep learning image classification system using transfer learning with InceptionV3 for brain tumor detection from MRI images. An academic computer-vision classification project, not a medical diagnostic tool.',
  points: ['Multi-class classification of MRI scans: Glioma, Meningioma, Pituitary and No Tumor.','Pre-trained InceptionV3 fine-tuned with Early Stopping and Model Checkpointing.','Image preprocessing, augmentation and normalization to improve generalization.'],
  tech: ['Python','TensorFlow','Keras','InceptionV3'], accuracy: '88.75%', presented: 'Presented at ICETSE 2025',
  samples: [['Glioma','/images/glioma.jpg'],['Meningioma','/images/meningioma.jpg'],['No Tumor','/images/no-tumor.jpg'],['Pituitary','/images/pituitary.jpg']],
  study: [
    ['Overview', 'A multi-class classifier that sorts MRI scans into four classes: Glioma, Meningioma, Pituitary Tumor and No Tumor. It is an academic computer-vision project and not a medical diagnostic tool.'],
    ['Data', 'Images were preprocessed, augmented and normalized, and the dataset was prepared to improve generalization.'],
    ['Model', 'Transfer learning with a pre-trained InceptionV3 network, built with TensorFlow and Keras and fine-tuned with Early Stopping and Model Checkpointing.'],
    ['Result', 'The model reached 88.75% accuracy.'],
    ['Presentation', 'The work was presented at ICETSE 2025. The notebook is available on Kaggle.'],
  ],
}
export const profile = {
  name: 'Srinivas Kanagare J', short: 'Srinivas',
  email: 'kangaresrinivas@gmail.com',
  github: 'https://github.com/srini526',
  linkedin: 'http://linkedin.com/in/srinivas-kangare/',
  ragRepo: 'https://github.com/srini526/RAG_Based_AI_Notebook',
  ragDemo:'https://ragbasedainotebook.vercel.app/',
  kaggle: 'https://www.kaggle.com/code/srinivaskangare/bt-final',
  researchRepo: 'https://github.com/srini526/Multi_Agent_AI_Research_System',
  researchDemo: 'https://multi-agent-ai-research-system-jet.vercel.app/',
  resume: '/Srinivas_Kanagare_J_Resume.pdf',
  headline: ['I build RAG and LLM systems', 'and ship them as products.'],
  intro: 'I build practical AI applications using RAG pipelines, LLMs, machine learning, embeddings, APIs and modern web technologies.',
  about: [
    'I am a Computer Science graduate focused on AI/ML application development. My work combines RAG pipelines, LLM applications, machine learning, backend APIs and modern web development.',
    'I enjoy turning ideas into working systems from data processing and embeddings to retrieval, model inference, APIs, interfaces and deployment.',
  ],
  cards: [
    ['RAG / LLM', 'Primary Focus'], ['Machine Learning', '88.75% MRI Classification'],
    ['AI Product Development', 'Model → API → UI'], ['Full-Stack', 'React / Flask / APIs'],
  ],
  journey: [
    { title: 'Android App Development using Gen AI Intern', org: 'MindMatrix.io (CL Infotech Pvt. Ltd.)', when: 'Feb 2026 – May 2026 · Remote',
      points: ['Developed and supported application features through structured Android development tasks and practical projects.', 'Assisted with feature implementation, testing, debugging and documentation.'],
      tech: ['Android Studio', 'Java', 'Kotlin', 'Jetpack', 'Gen AI', 'Gradle'] },
    // { title: 'B.E. in Computer Science & Design', org: 'Atria Institute of Technology · VTU', when: '2022 – 2026', points: [] },
  ],
  education: { degree: 'B.E. Computer Science & Design', school: 'Atria Institute of Technology', univ: 'Visvesvaraya Technological University', years: '2022 – 2026', cgpa: '7.41 / 10' },
}
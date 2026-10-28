export const ragStages = [
  ['01', 'Source Ingestion', 'Documents, audio, video and web'],
  ['02', 'Content Extraction', 'Extract text and media content'],
  ['03', 'Text Processing', 'Clean and normalize extracted content'],
  ['04', 'Chunking', 'Split content into searchable chunks'],
  ['05', 'BGE-M3 Embeddings', 'Generate embeddings via Cloudflare Workers AI'],
  ['06', 'FAISS Retrieval', 'Retrieve relevant source passages'],
  ['07', 'Agentic RAG', 'LangGraph retrieval and answer workflow'],
  ['08', 'Grounded Answer', 'LLM response with source citations'],
]

export const rag = {
  title: 'RAG-Based AI Notebook',
  slug: 'rag-assistant',
  category: 'RAG / LLM / Agentic AI',
  desc: 'An AI-powered knowledge workspace that lets users interact with their documents and other learning materials, receive source-grounded answers, and generate study resources using Retrieval-Augmented Generation.',

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
    'Multi-source ingestion for supported documents, audio, video, YouTube links and web content.',
    'BGE-M3 embeddings through Cloudflare Workers AI and FAISS for semantic retrieval.',
    'LangGraph-powered workflows for retrieval, answer generation and retrieval refinement.',
    'Source-grounded responses with citations to help users verify answers against original materials.',
    'Study Studio generates study guides, FAQs, flashcards, quizzes, timelines and mind maps.',
    'React frontend connected to a Flask REST API with streamed responses using Server-Sent Events.',
  ],

  query: [
    ['User query', 'Ask a question about notebook sources'],
    ['Query processing', 'Prepare the question for retrieval'],
    ['Semantic retrieval', 'Find relevant passages using FAISS'],
    ['Context assembly', 'Provide retrieved passages to the model'],
    ['LLM generation', 'Generate an answer using retrieved context'],
    ['Grounded answer', 'Return the response with source citations'],
  ],

  study: [
    [
      'Problem',
      'Information is often scattered across documents, lecture materials and web pages. Finding specific details manually takes time, and general-purpose chatbots may answer without grounding their responses in the user’s sources.',
    ],
    [
      'Approach',
      'Build an AI knowledge workspace that ingests supported content, indexes it for retrieval, and uses relevant source passages to answer questions and generate study materials.',
    ],
    [
      'Architecture',
      'The system combines a React and Vite frontend, a Flask REST API, source-ingestion pipelines, BGE-M3 embeddings, FAISS retrieval, LangChain integrations and LangGraph workflows.',
    ],
    [
      'Data Flow',
      'Content is extracted from supported sources, processed into text chunks and converted into embeddings using BGE-M3 through Cloudflare Workers AI. FAISS indexes the vectors for semantic retrieval.',
    ],
    [
      'Retrieval',
      'When a user asks a question, the system searches the indexed knowledge for relevant passages. Retrieved context is supplied to the language model to help produce answers grounded in the available sources.',
    ],
    [
      'Agentic Workflow',
      'LangGraph coordinates selected ingestion and conversational workflows. Retrieval can be evaluated and queries refined when needed before generating a response.',
    ],
    [
      'Source Citations',
      'Answers include source references so users can trace information back to the underlying material. Citation details depend on the metadata available for each source.',
    ],
    [
      'Study Studio',
      'The application can generate briefing documents, study guides, FAQs, timelines, mind maps, flashcards and quizzes from notebook content.',
    ],
    [
      'Tech Stack',
      'Python, Flask, React, Vite, Tailwind CSS, LangChain, LangGraph, FAISS, BGE-M3, Cloudflare Workers AI, Groq, Whisper, SQLAlchemy, SQLite, PostgreSQL and Server-Sent Events.',
    ],
    [
      'Deployment',
      'Live application: https://ragbasedainotebook.vercel.app/. Source code: https://github.com/srini526/RAG_Based_AI_Notebook. The frontend is deployed on Vercel and the application uses a Flask backend.',
    ],
    [
      'Outcome',
      'An end-to-end AI knowledge workspace that combines multi-source ingestion, semantic retrieval, grounded question answering and AI-generated study resources. No unverified performance benchmarks are claimed.',
    ],
    [
      'What I Learned',
      'How to design retrieval workflows, integrate embedding and language-model providers, orchestrate agentic processes, connect a React frontend to a Flask API, stream responses and preserve source context throughout answer generation.',
    ],
  ],
}

export const researchStages = [
  ['01', 'Search Agent', 'Scout finds the sources'], ['02', 'Reader Agent', 'Bookworm scrapes the pages'],
  ['03', 'Writer Chain', 'Scribbles drafts the report'], ['04', 'Critic Chain', 'Prof. Red reviews the draft'],
]
export const research = {
  title: 'Research Desk — Multi-Agent AI Research System', slug: 'research-desk', category: 'Multi-Agent AI / LLM Application',
  desc: 'A multi-agent system that turns a topic into a research report: a search agent finds sources, a reader agent scrapes them, a writer chain drafts the report and a critic chain reviews it. A FastAPI backend streams live progress to a React app.',
  tech: ['Python', 'FastAPI', 'React', 'Tailwind CSS', 'LangChain', 'Tavily', 'BeautifulSoup', 'Groq', 'Cloudflare Workers AI', 'Multi-Agent', 'Docker'],
  points: [
    'Four cooperating stages: a search agent using the Tavily API, a reader agent that scrapes pages with BeautifulSoup, a writer chain and a critic chain.',
    'FastAPI backend runs the pipeline in a worker thread and streams live agent output to the browser over Server-Sent Events.',
    'React app with animated agent characters, a report that types itself out, and a PDF download.',
    'Frontend deployed on Vercel and backend on Render. Safeguards include topic limits, one active run per IP and a cap on concurrent jobs.',
  ],
  flow: ['Topic', 'Search agent', 'Reader agent', 'Writer chain', 'Critic chain', 'Report'],
  study: [
    ['Problem', 'Researching a topic means searching, reading many pages and writing up the findings by hand. Research Desk automates that workflow with a small team of cooperating AI agents.'],
    ['My Role', 'A solo project: Srinivas designed and built it end to end, from the agent pipeline and backend API to the React interface and deployment.'],
    ['Approach', 'Instead of one big prompt, the work is split across four stages: a search agent finds sources through the Tavily search API, a reader agent scrapes the pages with BeautifulSoup, a writer chain drafts the report and a critic chain reviews the draft. The language models are called through the Groq API and Cloudflare Workers AI.'],
    ['Architecture', 'The pipeline runs the four stages in order and returns the search results, the scraped pages, the report and the critic feedback. The animated diagram below shows the flow.'],
    ['Backend', 'A FastAPI server wraps the pipeline. POST /api/research starts a run in a worker thread and returns a job id. A Server-Sent Events stream sends step markers, live agent output and the final result, and reconnects and resumes automatically. A separate endpoint builds the PDF download.'],
    ['Safeguards', 'Topics must be 5 to 200 characters, each IP can have one active run at a time, and the server caps concurrent jobs (default 2).'],
    ['Frontend', 'A React app built with Vite and Tailwind CSS. It shows a playful research lab where four animated characters work as the stages run: Scout (search), Bookworm (reader), Scribbles (writer) and Prof. Red (critic). The finished report types itself out and source cards can be dragged and clicked.'],
    ['Deployment', 'The React frontend is deployed on Vercel and the FastAPI backend on Render. A Dockerfile is also included for single-container deployment.'],
    ['Tech Stack', 'Python, FastAPI, Uvicorn, fpdf2, LangChain, React, Vite, Tailwind CSS and Server-Sent Events. Tavily API for web search, BeautifulSoup for scraping, and the Groq API and Cloudflare Workers AI for LLM calls.'],
    ['Outcome', 'A working end-to-end research assistant that turns a topic into a report with critic feedback, with a live demo and public code. No usage numbers or accuracy figures are claimed.'],
    ['What I Learned', 'Tool calling, designing an agent workflow and pipeline, web scraping, choosing the right model for each job, calling APIs reliably, and deploying a full-stack AI app.'],
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
export const secondary = [
  { title: 'LaptopLens', status: 'In progress', cats: ['AI', 'Full-Stack', 'DevOps'], tech: ['FastAPI', 'PostgreSQL', 'Groq', 'Docker', 'Kubernetes', 'React', 'Vite', 'Tailwind CSS'],
    desc: 'An AI laptop recommendation platform. A natural-language query is interpreted with Groq, matched against Flipkart and Amazon laptop listings in PostgreSQL, ranked, and explained. The FastAPI backend runs with Docker and Kubernetes; the React frontend is in progress.', links: [] },
    
  { title: 'Hinglish Script Writer', cats: ['AI'], tech: ['Python', 'Streamlit', 'LangGraph', 'Groq', 'gpt-oss-20b'],
    desc: 'A three-stage LangGraph workflow that turns raw text into a ready-to-speak Hinglish video script: a copyeditor cleans the text, a scriptwriter makes it engaging, and a translator localizes it into natural Hinglish. A Streamlit app shows live progress and lets you download each stage.',
    links: [['Live demo', 'https://hinglish-script-writer.streamlit.app/'], ['GitHub', 'https://github.com/srini526/Hinglish_script_writer']] },

  { title: 'Content Safety Analyzer', cats: ['AI'], tech: ['Python', 'Streamlit', 'LangGraph', 'Groq'],
    desc: 'A Streamlit app that scores text from 0 to 100 for toxicity and hate speech, copyright risk and cultural sensitivity using a LangGraph workflow and Groq. Scores are model estimates, not legal advice or moderation decisions, and the report can be downloaded.',
    links: [['Live demo', 'https://content-safety-analyzer.streamlit.app/'], ['GitHub', 'https://github.com/srini526/Content_saftety_analyzer']] },

  { title: 'Blockchain Land Registry System', cats: ['Full-Stack'], tech: ['Solidity', 'Ethereum', 'React'],
    desc: 'A blockchain-based land registry application with Solidity smart contracts and a React frontend. Presented at NCASET 2025.', links: [['GitHub (fork)', 'https://github.com/srini526/FinalYearProject-LandRegistry']] },

  { title: 'Mock Test Platform', cats: ['Full-Stack', 'AI'], tech: ['React', 'Tailwind CSS', 'Flask', 'SQLAlchemy', 'SQLite', 'SentenceTransformers'],
    desc: 'An interactive mock-test platform with a React and Tailwind interface, a Flask backend, and SentenceTransformer-based semantic features.', links: [['GitHub', 'https://github.com/srini526/Mocktest']] },
  { title: 'AI-Powered Metadata Explorer', cats: ['Full-Stack', 'AI'], tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
    desc: 'A full-stack platform for intelligent dataset discovery and metadata-based search.', links: [] },
  
  { title: 'Support Ticket Classifier', cats: ['AI'], tech: ['Python'],
    desc: 'A Python project that classifies customer support tickets.', links: [['GitHub', 'https://github.com/srini526/Support_ticket_classifier']] },

  { title: 'Pratham Chikisthe', cats: ['Android', 'AI'], tech: ['Kotlin', 'Android', 'Generative AI'],
    desc: 'A healthcare Android app written in Kotlin, built during the MindMatrix internship, with Generative AI integration.', links: [['GitHub', 'https://github.com/srini526/Pratham-Chikisthe']] },

  { title: 'Mathogic', cats: ['Full-Stack'], tech: ['React', 'JSX', 'Tailwind CSS'],
    desc: 'A landing-page project focused on frontend UI.', links: [['GitHub', 'https://github.com/srini526/LandingPage-Mathogic-']] },
    
  { title: 'Docker and GitHub Actions practice', cats: ['DevOps'], tech: ['Docker', 'GitHub Actions'],
    desc: 'Practice repositories for building Docker images and running GitHub Actions workflows.', links: [['Docker-Action-Demo', 'https://github.com/srini526/Docker-Action-Demo'], ['GitHub_action_pro', 'https://github.com/srini526/GitHub_action_pro'], ['Git_Hub_Actions', 'https://github.com/srini526/Git_Hub_Actions']] },
]
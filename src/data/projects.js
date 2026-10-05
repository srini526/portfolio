export const ragStages = [
  ['01','Lecture Video','Source content'], ['02','FFmpeg','Audio extraction'], ['03','Whisper Large-v3','Transcription'],
  ['04','Structured JSON','Timestamped text'], ['05','Chunking','Semantic segments'], ['06','BGE-M3 Embeddings','Run via Ollama'],
  ['07','Semantic Retrieval','Query ↔ chunks'], ['08','Llama 3.1 via Groq','Answer generation'],
]
export const rag = {
  title: 'RAG-Based AI Teaching Assistant', slug: 'rag-assistant', category: 'RAG / LLM / AI Application',
  desc: 'An AI teaching assistant that converts lecture videos into searchable knowledge and answers questions using Retrieval-Augmented Generation.',
  tech: ['Python','Flask','FFmpeg','Whisper Large-v3','BGE-M3','Ollama','Groq','Llama 3.1','Embeddings','Semantic Retrieval'],
  points: ['Groq-hosted LLMs generate context-aware answers from educational content.','Semantic embedding and retrieval pipeline built with Ollama matches user queries to relevant content.','Video/audio processed with Whisper and semantic chunking into a searchable knowledge base.','Flask REST APIs stream LLM responses, combining retrieval, context generation and real-time answers.'],
  query: [['User query','Question embedded with BGE-M3'],['Retrieval','Semantic match against lecture chunks'],['Relevant context','Top-matching transcript segments'],['LLM','Llama 3.1 via Groq'],['Answer','Streamed back through a Flask REST API']],
  study: [
    ['Problem','Lecture videos are hard to search. A student with a specific question has to scrub through recordings to find the relevant explanation.'],
    ['Approach','Turn the video into text, index it semantically, and let a language model answer questions using only the retrieved lecture context.'],
    ['Architecture','An eight-stage pipeline from lecture video to a generated answer, shown in the animated diagram below.'],
    ['Data Flow','FFmpeg extracts audio, Whisper Large-v3 transcribes it, and the transcript is stored as structured JSON. The JSON is chunked, and each chunk is embedded with BGE-M3.'],
    ['Retrieval','The user query is embedded and matched against the chunk embeddings by semantic similarity. The best-matching chunks become the context for the answer.'],
    ['LLM','The retrieved context and question are sent to Llama 3.1 through Groq. A Flask REST API streams the response back. Ollama is used in the embedding/model workflow; the stages use different models.'],
    ['Tech Stack','Python, Flask, FFmpeg, Whisper Large-v3, BGE-M3, Ollama, Groq, Llama 3.1, Scikit-learn, Joblib, NumPy, Pandas, React.'],
    ['Outcome','A working end-to-end pipeline that turns lecture video into a question-answering assistant. No production deployment, user counts or benchmarks are claimed.'],
    ['What I Learned','How retrieval quality depends on transcription and chunking choices, how to wire local embedding models with a hosted LLM, and how to stream model output through a Flask API.'],
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
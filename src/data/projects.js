export const ragStages = [
  ['01','Lecture Video','Source content'], ['02','FFmpeg','Audio extraction'], ['03','Whisper Large-v3','Transcription'],
  ['04','Structured JSON','Timestamped text'], ['05','Chunking','Semantic segments'], ['06','BGE-M3 Embeddings','Run via Ollama'],
  ['07','Semantic Retrieval','Query ↔ chunks'], ['08','Llama 3.1 via Groq','Answer generation'],
]
export const rag = {
  title: 'RAG-Based AI Teaching Assistant', category: 'RAG / LLM / Gen AI',
  desc: 'An AI teaching assistant that converts lecture videos into searchable knowledge and answers questions using Retrieval-Augmented Generation.',
  tech: ['Python','Flask','FFmpeg','Whisper Large-v3','BGE-M3','Ollama','Groq','Llama 3.1','Embeddings','Semantic Retrieval'],
  points: ['Video → Knowledge: Converted lecture videos to audio with FFmpeg and transcribed them using Whisper Large-v3.','Semantic Retrieval: Created chunks and generated BGE-M3 embeddings, enabling semantic matching between student questions and lecture content.','Context-Aware Generation: Retrieved relevant content and passed it to Llama 3.1 via Groq to generate grounded answers.','AI Application Layer: Built the backend with Flask REST APIs, including streaming responses, conversation history, source references, and retrieval-based context.'],
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
  title: 'Brain Tumor Detection System', category: 'Deep Learning / Computer Vision',
  desc: 'A deep learning image classification system using transfer learning with InceptionV3 for brain tumor detection from MRI images. An academic computer-vision classification project, not a medical diagnostic tool.',
  points: ['Multi-class classification of MRI scans: Glioma, Meningioma, Pituitary and No Tumor.','Pre-trained InceptionV3 fine-tuned with Early Stopping and Model Checkpointing.','Image preprocessing, augmentation and normalization to improve generalization.'],
  tech: ['Python','TensorFlow','Keras','InceptionV3'], accuracy: '88.75%', presented: 'Presented at ICETSE 2025',
  samples: [['Glioma','/images/glioma.jpg'],['Meningioma','/images/meningioma.jpg'],['No Tumor','/images/no-tumor.jpg'],['Pituitary','/images/pituitary.jpg']],
}
export const secondary = [
  { title: 'Blockchain Land Registry System', tag: 'Blockchain', desc: 'A blockchain-based land registry project built on Ethereum.' },
  { title: 'Mock Test Platform', tag: 'Full-Stack', desc: 'A full-stack platform for taking mock tests.' },
  { title: 'Mathogic', tag: 'Frontend', desc: 'A frontend-focused web project.' },
  { title: 'Blockchain Land Registry System', tag: 'Blockchain', desc: 'A blockchain-based land registry application with Solidity smart contracts and a React frontend. Presented at NCASET 2025.' },
  { title: 'Mock Test Platform', tag: 'Full-Stack', desc: 'An interactive mock-test platform: React and Tailwind interface, Flask, SQLAlchemy and SQLite backend, and SentenceTransformer-based semantic features.' },
  { title: 'Mathogic', tag: 'Frontend', desc: 'A landing-page project built with React JSX and Tailwind CSS.' },
]


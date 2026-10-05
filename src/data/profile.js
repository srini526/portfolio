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
export const profile = {
  name: 'Srinivas Kanagare J', short: 'Srinivas',
  email: 'kanagresrinivas@gmail.com',
  github: 'https://github.com/srini526',
  linkedin: 'http://linkedin.com/in/srinivas-kangare/',
  ragRepo: 'https://github.com/srini526/RAG_Based_AI_Teaching_Assistant',
  kaggle: 'https://www.kaggle.com/code/srinivaskangare/bt-final',
  resume: '/Srinivas_Kanagare_J_Resume.pdf',
  headline: ['I build RAG and LLM systems', 'and ship them as products.'],
  intro: 'I build practical AI applications using RAG pipelines, LLMs, machine learning, embeddings, APIs and modern web technologies.',
  about: [
    'I am a Computer Science & Design graduate focused on AI/ML application development. My work combines RAG pipelines, LLM applications, machine learning, backend APIs and modern web development.',
    'I enjoy turning ideas into working systems — from data processing and embeddings to retrieval, model inference, APIs, interfaces and deployment.',
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
  education: { degree: 'B.E. Computer Science & Design', school: 'Atria Institute of Technology', univ: 'Visvesvaraya Technological University', years: '2022 – 2026', cgpa: '7.53 / 10' },
}
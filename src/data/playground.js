// Knowledge base for the portfolio assistant. Only public, confirmed facts go here (resume + Srini's own profile notes).
// `tags` are extra search words: they help retrieval and are never shown to visitors.
export const chunks = [
  // ---- About ----
  { id: 'summary', src: 'Resume · Summary', tags: 'build built develop developed about who summary overview software backend experience introduce',
    text: 'Srinivas is a Computer Science & Design graduate with hands-on experience developing software applications, backend services and AI/ML solutions using Python, Flask, REST APIs and TensorFlow.' },
  { id: 'direction', src: 'Profile · Direction', tags: 'direction focus goal career role position looking interest specialize speciality identity',
    text: 'Srinivas is focused on AI-focused full-stack engineering: building and deploying practical RAG and LLM applications rather than only studying isolated ML concepts.' },
  { id: 'interests', src: 'Profile · Interests', tags: 'interest interested area topics passion like enjoy',
    text: 'His main interests are AI engineering, RAG systems, LLM applications, generative AI, embeddings and semantic search, full-stack development, backend APIs, React frontends, and cloud deployment of AI applications.' },
  { id: 'dsa', src: 'Profile · Direction', tags: 'dsa data structure algorithm coding leetcode interview problem assessment',
    text: 'Data structures and algorithms are a secondary focus for Srinivas: he practices coding problems for assessments and technical growth alongside his main AI and full-stack work.' },
  { id: 'edu', src: 'Resume · Education', tags: 'education degree college university study graduate cgpa school vtu',
    text: 'B.E. in Computer Science & Design at Atria Institute of Technology, Bengaluru, under Visvesvaraya Technological University (2022 – 2026), CGPA 7.53 / 10.' },
  { id: 'intern', src: 'Resume · Internship', tags: 'internship experience work job company android mindmatrix employer',
    text: 'Android App Development using Gen AI Intern at MindMatrix.io (CL Infotech Pvt. Ltd.), Feb 2026 – May 2026, remote. Worked on Android features, testing, debugging and documentation with Android Studio, Java, Kotlin, Jetpack, Gen AI and Gradle.' },

  // ---- RAG Teaching Assistant ----
  { id: 'rag0', src: 'Project · RAG Assistant', tags: 'build built rag project overview assistant teaching lecture llm flagship',
    text: 'The RAG-Based AI Teaching Assistant transcribes lecture video with Whisper Large-v3, embeds chunks with BGE-M3 via Ollama, retrieves them semantically and answers with Llama 3.1 via Groq.' },
  { id: 'rag1', src: 'Resume · RAG Assistant', tags: 'rag project build built llm groq',
    text: 'It was built with Python and Groq LLMs to generate context-aware responses from educational content.' },
  { id: 'rag2', src: 'Resume · RAG Assistant', tags: 'rag project retrieval embedding semantic search cosine similarity joblib',
    text: 'Semantic embedding and retrieval pipelines built with Ollama match user queries with relevant content. The question is embedded with BGE-M3 and compared with transcript chunks by cosine similarity, and embeddings are stored with joblib.' },
  { id: 'rag3', src: 'Resume · RAG Assistant', tags: 'rag project whisper audio video chunking knowledge base ffmpeg transcript json pipeline',
    text: 'Video and audio are processed with FFmpeg and Whisper, and the transcripts are stored as structured JSON and split into chunks to create a searchable educational knowledge base.' },
  { id: 'rag4', src: 'Resume · RAG Assistant', tags: 'rag project api backend stream flask',
    text: 'Flask REST APIs stream LLM responses, integrating retrieval, context generation and real-time answer delivery.' },
  { id: 'rag5', src: 'Profile · RAG Assistant', tags: 'rag project debug debugging ollama qwen prompt prompting grounding hallucination local challenge',
    text: 'On this project Srini debugged Ollama server and connection issues, experimented with qwen3:4b for local inference, and worked on RAG prompting and grounding so answers stay tied to the retrieved context.' },

  // ---- Brain Tumor ----
  { id: 'bt1', src: 'Resume · Brain Tumor', tags: 'project build built mri brain tumor computer vision deep learning classes classify transfer',
    text: 'The Brain Tumor Detection System classifies MRI scans into Glioma, Meningioma, Pituitary Tumor and No Tumor using transfer learning with InceptionV3 (TensorFlow and Keras). It is an academic computer-vision project, not a medical diagnostic tool.' },
  { id: 'bt2', src: 'Resume · Brain Tumor', tags: 'project mri brain tumor accuracy result conference presented research',
    text: 'InceptionV3 was fine-tuned with Early Stopping and Model Checkpointing, reaching 88.75% accuracy. The work was presented at ICETSE 2025.' },
  { id: 'bt3', src: 'Resume · Brain Tumor', tags: 'project mri brain tumor data preprocessing',
    text: 'Image preprocessing, augmentation, normalization and dataset preparation were used to improve generalization.' },

  // ---- Other projects ----
  { id: 'land', src: 'Profile · Land Registry', tags: 'project blockchain land registry solidity smart contract react ethereum ncaset conference web3',
    text: 'The Blockchain Land Registry System is a blockchain-based land registry application that combines Solidity smart contracts with a React frontend. It was presented at NCASET 2025.' },
  { id: 'conf', src: 'Profile · Achievements', tags: 'conference presented research paper publication achievement award recognition national',
    text: 'Srini presented his work at two national conferences in 2025: the brain tumor detection project at ICETSE 2025 and the blockchain land registry project at NCASET 2025.' },
  { id: 'mock', src: 'Profile · Mock Test Platform', tags: 'project mock test platform exam quiz flask sqlalchemy sqlite sentence transformer nlp semantic fullstack',
    text: 'The Mock Test Platform pairs a React and Tailwind CSS interface with a Flask, SQLAlchemy and SQLite backend, and uses a SentenceTransformer model (all-MiniLM-L6-v2) for semantic features.' },
  { id: 'mathogic', src: 'Profile · Mathogic', tags: 'project mathogic landing page frontend react tailwind ui',
    text: 'Mathogic is a landing-page project built with React JSX and Tailwind CSS, focused on frontend UI.' },
  { id: 'idea', src: 'Profile · Ideas', tags: 'idea future plan next personal knowledge os product agent automation vision',
    text: 'Personal AI Knowledge OS is a product idea, not a finished project: a persistent tool built around personal knowledge, retrieval, embeddings, LLMs, APIs and full-stack interfaces, with possible agents and automation.' },
  { id: 'site', src: 'Profile · This Portfolio', tags: 'portfolio website site assistant chatbot built how work api this made',
    text: "This portfolio is built with React and Vite. Its assistant retrieves passages from Srini's profile and, when connected, a server-side API sends them to an LLM on Groq, so the API key never reaches the browser." },

  // ---- Skills ----
  { id: 'sk-ai', src: 'Resume · Skills', tags: 'skill technology tech stack ai ml',
    text: 'AI / ML skills: Machine Learning, Deep Learning, NLP, RAG, Embeddings, TensorFlow, Keras, InceptionV3, Scikit-learn, Sentence Transformers, Pandas and NumPy.' },
  { id: 'sk-llm', src: 'Resume · Skills', tags: 'skill technology tech stack llm genai',
    text: 'LLM / GenAI skills: LLM applications, RAG, Whisper, BGE-M3, Ollama, Groq, Llama, qwen3, Hugging Face and Prompt Engineering.' },
  { id: 'sk-web', src: 'Resume · Skills', tags: 'skill technology tech stack backend frontend language programming web',
    text: 'Backend and web skills: Flask, FastAPI, Uvicorn, SQLAlchemy, REST APIs, React, Vite, Tailwind CSS, HTML5 and CSS3. Languages: Python, JavaScript, SQL, Java, Kotlin, Solidity, C++ and C.' },
  { id: 'sk-tools', src: 'Resume · Skills', tags: 'skill technology tech stack tools database sql',
    text: 'Databases: SQLite, PostgreSQL, MySQL and MongoDB. Tools: Git, GitHub, Postman, Bitbucket and Linux / Ubuntu command line.' },
  { id: 'dev1', src: 'Profile · Cloud & DevOps', tags: 'devops cloud docker github actions ci cd pipeline deployment automation dockerfile hub container',
    text: 'Srini has hands-on practice with Docker (writing Dockerfiles, building images, debugging build issues, pushing to Docker Hub) and has learned GitHub Actions workflow YAML for Docker-based automation and deployment pipelines.' },
  { id: 'dev2', src: 'Profile · Cloud & DevOps', tags: 'devops cloud kubernetes minikube kubectl aws s3 cloudfront ec2 nginx deploy deployment infrastructure',
    text: 'For Kubernetes he has used kubectl and Minikube to deploy containerized apps and debug node problems. On AWS he has worked with S3 and CloudFront and explored EC2 with Nginx, debugging CloudFront Access Denied and port-binding errors. This is learning-stage deployment work.' },

  // ---- Contact ----
  { id: 'contact', src: 'Profile · Contact', tags: 'contact email reach hire connect github linkedin touch message profile link',
    text: 'You can reach Srini at kanagresrinivas@gmail.com. GitHub: github.com/srini526. LinkedIn: linkedin.com/in/srinivas-kangare.' },
]

export const suggestions = [
  'What does Srini build?', 'Tell me about the RAG project', 'MRI project accuracy?',
  'Which skills does he have?', 'Cloud and DevOps experience', 'Internship experience', 'Education',
]

const STOP = new Set('a an the is are was were be to of in on for and or with what whats which who how do does did tell me about his he him srini srinivas srivas kanagare can you it its at as by from this that has have any there give show please know knows used use uses'.split(' '))
const stem = (w) => (w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1) : w)
export const tokenize = (s) => s.toLowerCase().replace(/[^a-z0-9.+#\s-]/g, ' ').split(/\s+/).filter((w) => w && !STOP.has(w)).map(stem)

const score = (query) => {
  const qt = [...new Set(tokenize(query))]
  if (!qt.length) return []
  return chunks.map((c) => {
    const set = new Set(tokenize(`${c.text} ${c.tags}`))
    const hits = qt.filter((t) => set.has(t)).length
    return { ...c, hits, score: hits / qt.length }
  }).filter((c) => c.hits > 0).sort((a, b) => b.hits - a.hits)
}

// Offline demo: the best-scoring ties (max 3).
export function retrieve(query) {
  const s = score(query)
  return s.length ? s.filter((c) => c.hits === s[0].hits).slice(0, 3) : []
}

// Live API: the top-k chunks (not only ties).
export function retrieveTop(query, k = 4) { return score(query).slice(0, k) }

export const fallback = "I couldn't find that in Srinivas's profile. Try asking about his projects, skills, education, cloud work or internship."
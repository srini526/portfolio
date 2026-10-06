// Knowledge base for the portfolio assistant. Only real, confirmed facts go here (resume, GitHub, and Srinivas's own answers).
// `tags` are extra search words: they help retrieval and are never shown to visitors.
export const chunks = [
  { id: 'summary', src: 'Profile · About', tags: 'who about introduce summary overview build built interest cloud native',
    text: 'Srinivas Kanagare J is a Computer Science & Design graduate with a strong interest in AI, generative AI, RAG systems, full-stack development and cloud-native technologies. He enjoys building practical systems rather than learning technologies only in theory.' },
  { id: 'resume', src: 'Resume · Summary', tags: 'resume summary experience develop developed software backend services',
    text: 'He has hands-on experience developing software applications, backend services and AI/ML solutions using Python, Java, Flask, REST APIs and TensorFlow.' },
  { id: 'why', src: 'Profile · Story', tags: 'why ai rag motivation choose chose interested story start started inspiration',
    text: 'Srinivas moved into AI because he wanted to go beyond building conventional applications and understand how intelligent systems use information to solve problems. RAG appealed to him because it combines Python, backend development, NLP, embeddings, search, databases and LLMs: instead of just sending a question to an LLM, the system retrieves relevant information from its own knowledge base and generates a grounded answer. That led to his RAG-Based AI Teaching Assistant.' },
  { id: 'first', src: 'Profile · Story', tags: 'first earliest begin beginning start journey timeline began',
    text: 'Among his earlier AI projects was the Brain Tumor Detection System, followed by the more advanced RAG-Based AI Teaching Assistant.' },
  { id: 'edu', src: 'Resume · Education', tags: 'education degree college university study graduate graduation cgpa school vtu scheme atria bachelor engineering',
    text: 'Bachelor of Engineering in Computer Science & Design at Atria Institute of Technology, Bengaluru, affiliated to Visvesvaraya Technological University (VTU), 2022 scheme. Graduation: 2026. CGPA: 7.53 / 10.' },
  { id: 'courses', src: 'Profile · Education', tags: 'course courses subject subjects academic lab labs syllabus relevant study',
    text: 'Relevant academic and technical areas include machine learning, deep learning, data science, natural language processing, database management, web development, mobile application development, UI/UX, and research / technical project work. His cloud and deployment skills come from independent projects.' },
  { id: 'intern', src: 'Resume · Internship', tags: 'internship experience work job company android mindmatrix employer',
    text: 'Android App Development using Gen AI Intern at MindMatrix.io (CL Infotech Pvt. Ltd.), Feb 2026 – May 2026, remote. Worked on Android features, testing, debugging and documentation with Android Studio, Java, Kotlin, Jetpack, Gen AI and Gradle.' },
  { id: 'conf', src: 'Profile · Achievements', tags: 'conference presented research paper publication achievement award recognition national',
    text: 'Srinivas presented his work at two national conferences in 2025: the brain tumor detection project at ICETSE 2025 and the blockchain land registry project at NCASET 2025.' },

  // ---- RAG-Based AI Teaching Assistant ----
  { id: 'rag0', src: 'Project · RAG Assistant', tags: 'rag project overview assistant teaching lecture what does pipeline flagship',
    text: 'The RAG-Based AI Teaching Assistant lets users ask questions about lecture content and get answers grounded in the lecture material. It processes lecture videos, converts them into searchable knowledge, retrieves relevant content and uses an LLM to generate context-aware responses.' },
  { id: 'rag1', src: 'Project · RAG Assistant', tags: 'rag project pipeline architecture flow stages how works build built',
    text: 'The pipeline is: lecture video, FFmpeg, audio, Whisper Large-v3, structured transcript, chunks, BGE-M3 embeddings via Ollama, semantic retrieval with cosine similarity, then Llama 3.1 through Groq generates the answer. A Flask REST API streams the response.' },
  { id: 'rag2', src: 'Project · RAG Assistant', tags: 'rag project retrieval embedding semantic search cosine similarity joblib',
    text: 'The question is embedded with BGE-M3 and compared with the transcript chunk embeddings by cosine similarity, and the embeddings are stored with joblib. The best-matching chunks become the context for the LLM.' },
  { id: 'rag3', src: 'Project · RAG Assistant', tags: 'rag project role solo problem solves why purpose',
    text: 'It is a solo project: Srinivas designed and built it end to end. It solves a real problem: students have lots of lecture video but no convenient way to ask questions about that specific material, so the system turns long-form lectures into an interactive question-answering tool.' },
  { id: 'rag4', src: 'Project · RAG Assistant', tags: 'rag project hardest challenge difficult problem tech stack technologies',
    text: 'The hardest part was designing the pipeline so that unstructured lecture video becomes structured, searchable knowledge that can be reliably retrieved as context for the LLM. Tech: Python, Flask, Whisper Large-v3, FFmpeg, BGE-M3, Ollama, Groq, Llama 3.1 and JSON-based transcript and chunk processing.' },
  { id: 'rag5', src: 'Project · RAG Assistant', tags: 'rag project debug debugging ollama qwen prompt prompting grounding hallucination local result outcome accuracy benchmark metrics',
    text: 'Along the way he debugged Ollama server and connection issues, experimented with qwen3:4b for local inference, and worked on RAG prompting and grounding so answers stay tied to the retrieved context. The project implements the complete RAG pipeline end to end; no accuracy or latency benchmarks are claimed.' },

  // ---- Brain Tumor Detection ----
  { id: 'bt1', src: 'Project · Brain Tumor', tags: 'project build built mri brain tumor computer vision deep learning classes classify transfer what does',
    text: 'The Brain Tumor Detection System is a deep-learning image classifier that sorts brain MRI scans into Glioma, Meningioma, Pituitary Tumor and No Tumor using transfer learning with InceptionV3 (Python, TensorFlow, Keras). It is an academic computer-vision project, not a medical diagnostic tool.' },
  { id: 'bt2', src: 'Project · Brain Tumor', tags: 'project mri brain tumor accuracy result conference presented research kaggle notebook',
    text: 'InceptionV3 was fine-tuned with Early Stopping and Model Checkpointing and reached 88.75% classification accuracy. The work was presented at ICETSE 2025, and the notebook is public on Kaggle.' },
  { id: 'bt3', src: 'Project · Brain Tumor', tags: 'project mri brain tumor data preprocessing role problem solves hardest challenge',
    text: 'Srinivas worked on the machine-learning implementation and project development, including image preprocessing, augmentation and normalization to improve generalization. Manual analysis of medical images can be time-consuming, so the project explores how deep-learning classification could assist. The hardest part was applying transfer learning effectively to medical image data and building a pipeline that produces meaningful results.' },

  // ---- LaptopLens (in progress) ----
  { id: 'll0', src: 'Project · LaptopLens', tags: 'laptoplens laptop recommendation recommender agent project what does in progress',
    text: 'LaptopLens is an AI-powered laptop recommendation system that understands natural-language requirements and uses tools and data to find suitable laptops. For example, a user can ask for a coding laptop under ₹70,000 with an H-series processor, and the system interprets the requirements and searches for matching products. It is in progress.' },
  { id: 'll1', src: 'Project · LaptopLens', tags: 'laptoplens role solo problem solves why purpose',
    text: 'LaptopLens is a solo project: Srinivas is designing the architecture and building it end to end. It addresses the difficulty of translating a need like "a powerful coding laptop under ₹70K with an H-series CPU" into technical specifications, by turning natural-language requests into structured laptop-search criteria and recommendations.' },
  { id: 'll2', src: 'Project · LaptopLens', tags: 'laptoplens tech stack technologies architecture docker kubernetes fastapi postgresql secrets deployment agent tool calling',
    text: 'Tech: Python, an AI agent architecture with LLM-based reasoning and tool calling, FastAPI backend components, PostgreSQL, Docker, Kubernetes (including Kubernetes Secrets), GitHub and GitHub Actions, and LLM API integrations such as Groq. He is also restructuring it as a more production-oriented, containerized system ("Architecture 2").' },
  { id: 'll3', src: 'Project · LaptopLens', tags: 'laptoplens result tested hardest challenge difficult accuracy benchmark',
    text: 'The agent has been tested with natural-language queries such as "coding laptop under 70k with H processor" and produced structured tool calls for laptop search. The hardest part is making the agent interpret ambiguous human requirements as structured search parameters rather than only a conversational answer. No accuracy or benchmark numbers are claimed.' },

  // ---- Other projects ----
  { id: 'land', src: 'Project · Land Registry', tags: 'project blockchain land registry solidity smart contract react ethereum ncaset conference web3 role problem tamper',
    text: 'The Blockchain Land Registry System is a blockchain-based land registry application meant to give a transparent, tamper-resistant record of land ownership; traditional land records can suffer from limited transparency, centralized control and tampering. Srinivas worked on the smart contract and frontend using Solidity and React, and the project was presented at NCASET 2025.' },
  { id: 'mock', src: 'Project · Mock Test Platform', tags: 'project mock test platform exam quiz flask sqlalchemy sqlite sentence transformer nlp semantic fullstack role',
    text: 'The Mock Test Platform is a web-based platform for practicing questions and taking mock tests through a dedicated interface instead of static question documents. Srinivas worked on both frontend and backend: React and Tailwind CSS, Flask, SQLAlchemy and SQLite, with a SentenceTransformer model (all-MiniLM-L6-v2) for semantic processing of text.' },
  { id: 'pratham', src: 'Project · Pratham Chikisthe', tags: 'project pratham chikisthe healthcare health android kotlin app internship genai mindmatrix',
    text: 'Pratham Chikisthe is a healthcare Android app written in Kotlin, built during the MindMatrix internship, with Generative AI integration.' },
  { id: 'meta', src: 'Project · Metadata Explorer', tags: 'project metadata explorer dataset discovery search react node mongodb fullstack',
    text: 'The AI-Powered Metadata Explorer is a full-stack platform for intelligent dataset discovery and metadata-based search, built with React.js, Node.js, MongoDB and REST APIs.' },
  { id: 'ticket', src: 'Project · Support Ticket Classifier', tags: 'project support ticket classifier classify python machine learning',
    text: 'The Support Ticket Classifier is a Python project that classifies customer support tickets.' },
  { id: 'mathogic', src: 'Project · Mathogic', tags: 'project mathogic landing page frontend react tailwind ui',
    text: 'Mathogic is a landing-page project built with React JSX and Tailwind CSS, focused on frontend UI.' },
  { id: 'idea', src: 'Profile · Ideas', tags: 'idea future plan next personal knowledge os product agent automation vision',
    text: 'Personal AI Knowledge OS is a product idea, not a finished project: a persistent tool built around personal knowledge, retrieval, embeddings, LLMs, APIs and full-stack interfaces, with possible agents and automation.' },
  { id: 'site', src: 'Profile · This Portfolio', tags: 'portfolio website site assistant chatbot built how work api this made',
    text: "This portfolio is built with React and Vite. Its assistant retrieves passages from Srinivas's profile and, when connected, a server-side API sends them to an LLM on Groq, so the API key never reaches the browser." },

  // ---- Skills ----
  { id: 'sk-ai', src: 'Resume · Skills', tags: 'skill skills technology tech stack ai ml',
    text: 'AI / ML skills: Machine Learning, Deep Learning, NLP, RAG, Embeddings, TensorFlow, Keras, InceptionV3, Scikit-learn, Sentence Transformers, Pandas and NumPy.' },
  { id: 'sk-llm', src: 'Resume · Skills', tags: 'skill skills technology tech stack llm genai',
    text: 'LLM / GenAI skills: LLM applications, RAG, Whisper, BGE-M3, Ollama, Groq, Llama, qwen3, Hugging Face and Prompt Engineering.' },
  { id: 'sk-web', src: 'Resume · Skills', tags: 'skill skills technology tech stack backend frontend language programming web',
    text: 'Backend and web skills: Flask, FastAPI, Uvicorn, SQLAlchemy, REST APIs, React, Vite, Tailwind CSS, HTML5 and CSS3. Languages: Python, JavaScript, SQL, Java, Kotlin, Solidity, C++ and C.' },
  { id: 'sk-tools', src: 'Resume · Skills', tags: 'skill skills technology tech stack tools database sql',
    text: 'Databases: SQLite, PostgreSQL, MySQL and MongoDB. Tools: Git, GitHub, Postman, Bitbucket and Linux / Ubuntu command line.' },
  { id: 'dev1', src: 'Profile · Cloud & DevOps', tags: 'devops cloud docker github actions ci cd pipeline deployment automation dockerfile hub container',
    text: 'Srinivas has hands-on practice with Docker (writing Dockerfiles, building images, debugging build issues, pushing to Docker Hub) and has learned GitHub Actions workflow YAML for Docker-based automation and deployment pipelines. His Docker and GitHub Actions practice repositories are public on GitHub.' },
  { id: 'dev2', src: 'Profile · Cloud & DevOps', tags: 'devops cloud kubernetes minikube kubectl aws s3 cloudfront ec2 nginx deploy deployment infrastructure',
    text: 'For Kubernetes he has used kubectl and Minikube to deploy containerized apps and debug node problems. On AWS he has worked with S3 and CloudFront and explored EC2 with Nginx, debugging CloudFront Access Denied and port-binding errors. This is learning-stage deployment work.' },

  // ---- Interests, learning, goals, roles ----
  { id: 'e2e', src: 'Profile · About', tags: 'interest focus recent work technology end to end systems how ai works deployment interface',
    text: 'He is particularly interested in how AI systems work end to end: from data processing and embeddings to retrieval, LLM reasoning, APIs, deployment and user interfaces. Recent work includes the RAG-based Teaching Assistant and LaptopLens, alongside FastAPI, Flask, React, Docker, Kubernetes, AWS, Ollama, Hugging Face and LLM APIs.' },
  { id: 'learn', src: 'Profile · Story', tags: 'learn learning style how approach courses self taught tutorials',
    text: 'He learns by building. He studies the fundamentals, follows tutorials or documentation when needed, starts building something, runs into problems, debugs and researches them, integrates the technology into a real project, and gradually expands it. Areas he has worked through include Python, NumPy and Pandas, machine learning, deep learning, NLP, LLMs, RAG, Hugging Face, Ollama, FastAPI and Flask, React, SQL, Docker, Kubernetes, GitHub Actions and AWS.' },
  { id: 'goals', src: 'Profile · Goals', tags: 'goal goals future plan next years grow aim ambition vision',
    text: 'His main goal is to become a strong AI / generative AI engineer who can take production-oriented AI applications from architecture to implementation, deployment and production. He wants to grow in LLM application development, RAG and agentic systems, machine learning and deep learning, the Hugging Face ecosystem, PyTorch, FastAPI, vector databases and retrieval systems, cloud deployment, Docker and Kubernetes, and system design for AI applications.' },
  { id: 'roles', src: 'Profile · Roles', tags: 'role roles position job looking hire hiring seeking opportunity opportunities want fit available availability',
    text: 'He is looking for roles as a Generative AI Engineer, AI/ML Engineer, AI Engineer or LLM / RAG Engineer. He is also interested in Full-Stack Developer, Backend Developer, AI-focused Software Engineer and Cloud/AI Engineer roles, and cares more about building real AI-powered products than being tied to one technology stack.' },
  { id: 'dsa', src: 'Profile · Direction', tags: 'dsa data structure algorithm coding leetcode interview problem assessment',
    text: 'Data structures and algorithms are a secondary focus: he practices coding problems for assessments and technical growth alongside his main AI and full-stack work.' },

  // ---- Contact ----
  { id: 'contact', src: 'Profile · Contact', tags: 'contact email reach hire connect github linkedin touch message profile link',
    text: 'You can reach Srinivas at kangaresrinivas@gmail.com, through the contact form on this site, on GitHub (github.com/srini526) or on LinkedIn (linkedin.com/in/srinivas-kangare).' },
]

export const suggestions = [
  'Who is Srinivas?', 'Tell me about the RAG project', 'What is LaptopLens?',
  'Which roles is he looking for?', 'Cloud and DevOps experience', 'Education',
]

const STOP = new Set('a an the is are was were be to of in on for and or with what whats which how do does did tell me about his he him srini srinivas srivas kanagare can you it its at as by from this that has have any there give show please know knows used use uses'.split(' '))
const stem = (w) => (w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1) : w)
export const tokenize = (s) => s.toLowerCase().replace(/[^a-z0-9.+#\s-]/g, ' ').split(/\s+/).filter((w) => w && !STOP.has(w)).map(stem)

const score = (query) => {
  const qt = [...new Set(tokenize(query))]
  if (!qt.length) return []
  return chunks.map((c) => {
    const tagSet = new Set(tokenize(c.tags)), textSet = new Set(tokenize(c.text))
    let w = 0, hits = 0
    for (const t of qt) { if (tagSet.has(t)) { w += 2; hits++ } else if (textSet.has(t)) { w += 1; hits++ } } // curated tags count double
    return { ...c, hits, w, score: hits / qt.length }
  }).filter((c) => c.hits > 0).sort((a, b) => b.w - a.w)
}

// Offline demo: the best-scoring ties (max 3).
export function retrieve(query) {
  const s = score(query)
  return s.length ? s.filter((c) => c.w === s[0].w).slice(0, 3) : []
}

// Live API: the top-k chunks (not only ties).
export function retrieveTop(query, k = 4) { return score(query).slice(0, k) }

export const fallback = "I couldn't find that in Srinivas's profile. You can ask him directly through the contact form."
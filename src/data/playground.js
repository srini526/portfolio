// Knowledge base for the RAG playground. Every chunk comes from Srini's resume / portfolio content.
// `tags` are extra search words (they are not shown to the visitor).
export const chunks = [
  { id: 'summary', src: 'Resume · Summary', tags: 'build built develop developed about who summary overview software backend experience',
    text: 'Srini is a Computer Science graduate with hands-on experience developing software applications, backend services and AI/ML solutions using Python, Java, Flask, REST APIs and TensorFlow.' },
  { id: 'rag0', src: 'Project · RAG Assistant', tags: 'build built rag project overview assistant teaching lecture llm',
    text: 'The RAG-Based AI Teaching Assistant transcribes lecture video with Whisper Large-v3, embeds chunks with BGE-M3 via Ollama, retrieves them semantically and answers with Llama 3.1 via Groq.' },
  { id: 'rag1', src: 'Resume · RAG Assistant', tags: 'rag project build built llm groq',
    text: 'It was built with Python and Groq LLMs to generate context-aware responses from educational content.' },
  { id: 'rag2', src: 'Resume · RAG Assistant', tags: 'rag project retrieval embedding semantic',
    text: 'Semantic embedding and retrieval pipelines built with Ollama match user queries with relevant content.' },
  { id: 'rag3', src: 'Resume · RAG Assistant', tags: 'rag project whisper audio video chunking knowledge base',
    text: 'Video and audio are processed with Whisper and semantic chunking to create a searchable educational knowledge base.' },
  { id: 'rag4', src: 'Resume · RAG Assistant', tags: 'rag project api backend stream flask',
    text: 'Flask REST APIs stream LLM responses, integrating retrieval, context generation and real-time answer delivery.' },
  { id: 'bt1', src: 'Resume · Brain Tumor', tags: 'project build built mri brain tumor computer vision deep learning classes classify',
    text: 'The Brain Tumor Detection System classifies MRI scans into Glioma, Meningioma, Pituitary Tumor and No Tumor using transfer learning with InceptionV3.' },
  { id: 'bt2', src: 'Resume · Brain Tumor', tags: 'project mri brain tumor accuracy result conference presented research',
    text: 'InceptionV3 was fine-tuned with Early Stopping and Model Checkpointing, reaching 88.75% accuracy. The work was presented at ICETSE 2025.' },
  { id: 'bt3', src: 'Resume · Brain Tumor', tags: 'project mri brain tumor data preprocessing',
    text: 'Image preprocessing, augmentation, normalization and dataset preparation were used to improve generalization.' },
  { id: 'edu', src: 'Resume · Education', tags: 'education degree college university study graduate cgpa school',
    text: 'B.E. in Computer Science and Design at Atria Institute of Technology, Bangalore (2022 – 2026), CGPA 7.53 / 10.' },
  { id: 'intern', src: 'Resume · Internship', tags: 'internship experience work job company android mindmatrix',
    text: 'Android App Development using Gen AI Intern at MindMatrix.io (CL Infotech Pvt. Ltd.), Feb 2026 – May 2026, remote. Worked on Android features, testing, debugging and documentation with Android Studio, Java, Kotlin, Jetpack, Gen AI and Gradle.' },
  { id: 'sk-ai', src: 'Resume · Skills', tags: 'skill technology tech stack ai ml',
    text: 'AI / ML skills: Machine Learning, Deep Learning, RAG, Embeddings, TensorFlow, Keras, Scikit-learn, Pandas and NumPy.' },
  { id: 'sk-llm', src: 'Resume · Skills', tags: 'skill technology tech stack llm genai',
    text: 'LLM / GenAI skills: LLM applications, RAG, BGE-M3, Whisper, Ollama, Hugging Face and Prompt Engineering.' },
  { id: 'sk-web', src: 'Resume · Skills', tags: 'skill technology tech stack backend frontend language programming web',
    text: 'Backend and web skills: Flask, FastAPI, React, REST APIs, HTML5, CSS3 and Tailwind CSS. Languages: Python, JavaScript, SQL, Java, C++ and C.' },
  { id: 'sk-tools', src: 'Resume · Skills', tags: 'skill technology tech stack tools devops database docker',
    text: 'Tools: Git, GitHub, GitHub Actions, Docker, Docker Hub, Postman, Bitbucket and Linux. Databases: MySQL and MongoDB.' },
]

export const suggestions = [
  'What does Srini build?', 'Tell me about the RAG project', 'MRI project accuracy?',
  'Which skills does he have?', 'Internship experience', 'Education',
]

const STOP = new Set('a an the is are was were be to of in on for and or with what whats which who how do does did tell me about his he him srini srinivas kanagare can you it its at as by from this that has have any there give show please'.split(' '))
const stem = (w) => (w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1) : w)
export const tokenize = (s) => s.toLowerCase().replace(/[^a-z0-9.+#\s-]/g, ' ').split(/\s+/).filter((w) => w && !STOP.has(w)).map(stem)

// Keyword retrieval: rank chunks by how many query words they contain. Returns the best-scoring ties (max 3).
export function retrieve(query) {
  const qt = [...new Set(tokenize(query))]
  if (!qt.length) return []
  const scored = chunks.map((c) => {
    const set = new Set(tokenize(`${c.text} ${c.tags}`))
    const hits = qt.filter((t) => set.has(t)).length
    return { ...c, hits, score: hits / qt.length }
  }).filter((c) => c.hits > 0).sort((a, b) => b.hits - a.hits)
  if (!scored.length) return []
  return scored.filter((c) => c.hits === scored[0].hits).slice(0, 3)
}

export const fallback = "I couldn't find that in Srini's resume. Try asking about his projects, skills, education or internship."


// Top-k retrieval used by the live API (unlike retrieve(), it does not only return ties).
export function retrieveTop(query, k = 4) {
  const qt = [...new Set(tokenize(query))]
  if (!qt.length) return []
  return chunks.map((c) => {
    const set = new Set(tokenize(`${c.text} ${c.tags}`))
    const hits = qt.filter((t) => set.has(t)).length
    return { ...c, hits, score: hits / qt.length }
  }).filter((c) => c.hits > 0).sort((a, b) => b.hits - a.hits).slice(0, k)
}
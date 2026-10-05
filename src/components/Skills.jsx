import { Search, Network, Brain, Mic, Zap, Sparkles, Layers, Cpu, Languages, Bot, Box, Cloud, Server, Globe, HardDrive, Database, Code2 } from 'lucide-react'
import { SiPython, SiTensorflow, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiHuggingface, SiOllama, SiFlask, SiFastapi, SiSqlalchemy, SiReact, SiVite, SiTailwindcss, SiJavascript, SiHtml5, SiCss, SiKotlin, SiOpenjdk, SiCplusplus, SiC, SiSolidity, SiSqlite, SiPostgresql, SiMysql, SiMongodb, SiGit, SiGithub, SiGithubactions, SiDocker, SiKubernetes, SiNginx, SiLinux, SiPostman, SiAndroidstudio, SiJetpackcompose, SiGradle } from 'react-icons/si'
import { Reveal } from '../hooks.jsx'
const icons = {
  Python: SiPython, TensorFlow: SiTensorflow, Keras: SiKeras, 'Scikit-learn': SiScikitlearn, Pandas: SiPandas, NumPy: SiNumpy, 'Hugging Face': SiHuggingface, Ollama: SiOllama,
  Flask: SiFlask, FastAPI: SiFastapi, SQLAlchemy: SiSqlalchemy, React: SiReact, Vite: SiVite, 'Tailwind CSS': SiTailwindcss, JavaScript: SiJavascript, HTML: SiHtml5, CSS: SiCss,
  Kotlin: SiKotlin, Java: SiOpenjdk, 'C++': SiCplusplus, C: SiC, Solidity: SiSolidity, SQLite: SiSqlite, PostgreSQL: SiPostgresql, MySQL: SiMysql, MongoDB: SiMongodb,
  Git: SiGit, GitHub: SiGithub, 'GitHub Actions': SiGithubactions, Docker: SiDocker, Kubernetes: SiKubernetes, Nginx: SiNginx, Linux: SiLinux, Postman: SiPostman,
  'Android Studio': SiAndroidstudio, Jetpack: SiJetpackcompose, Gradle: SiGradle,
  'Machine Learning': Brain, 'Deep Learning': Cpu, NLP: Languages, Embeddings: Network, RAG: Search, 'Sentence Transformers': Layers, Groq: Zap, Whisper: Mic, 'BGE-M3': Layers,
  'Llama 3.1': Bot, 'Prompt Engineering': Sparkles, SQL: Database, Minikube: Box, AWS: Cloud, S3: HardDrive, CloudFront: Globe, EC2: Server,
}
const groups = [
  ['AI / ML', ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning', 'Deep Learning', 'NLP', 'Embeddings', 'RAG', 'Sentence Transformers']],
  ['LLM / GenAI', ['Hugging Face', 'Ollama', 'Groq', 'Whisper', 'BGE-M3', 'Llama 3.1', 'Prompt Engineering']],
  ['Backend', ['Flask', 'FastAPI', 'SQLAlchemy']],
  ['Frontend', ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS']],
  ['Languages', ['Java', 'Kotlin', 'C++', 'C', 'SQL', 'Solidity']],
  ['Databases', ['SQLite', 'PostgreSQL', 'MySQL', 'MongoDB']],
  ['DevOps / Cloud', ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Kubernetes', 'Minikube', 'AWS', 'S3', 'CloudFront', 'EC2', 'Nginx', 'Linux', 'Postman']],
  ['Android', ['Android Studio', 'Jetpack', 'Gradle']],
]
export default function Skills() {
  return (
    <section id="skills" className="container sec">
      <p className="eyebrow"><i />Skills</p><h2>Tools I <em>work with.</em></h2>
      {groups.map(([g, items]) => (
        <Reveal key={g} className="sgroup">
          <h3>{g}</h3>
          <ul className="sgrid">{items.map((s) => { const I = icons[s] || Code2; return <li key={s} className="tile"><I size={26} aria-hidden="true" /><span>{s}</span></li> })}</ul>
        </Reveal>
      ))}
    </section>
  )
}
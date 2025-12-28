import React from "react";
import "./App.css";
import { motion } from "framer-motion";

/* Animation presets */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

const dividerAnim = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.4, ease: "easeInOut" }
  }
};

export default function App() {
  return (
    <div className="portfolio">

      {/* HERO */}
      <motion.section className="hero" initial="hidden" animate="visible" variants={fadeUp}>
        <h1>
          Building AI Systems That Think in Data<br />
          <span>and Act in the Real World</span>
        </h1>

        <p className="name">Sruthi Keerthana Nuttakki</p>

        <p className="meta">
          Machine Learning Engineer · Data Scientist · Applied AI<br />
          🎓 M.S. Data Science Candidate @ Arizona State University (Dec 2025)
        </p>

        <p className="intro">
          I am a Machine Learning Engineer with a strong foundation in Electrical
          Engineering and Data Science. I build AI systems that are not only
          accurate, but robust, interpretable, and reliable under real-world
          constraints. My work spans optimization, predictive modeling, deep
          learning, and scalable data pipelines across healthcare, industrial
          reliability, logistics, and business intelligence.
        </p>

        <div className="cta">
          <a href="/Sruthi_Nuttakki_Resume.pdf" download>📄 Resume</a>
          <a
            href="https://www.linkedin.com/in/sruthi-keerthana-nuttakki"
            target="_blank"
            rel="noreferrer"
            className="secondary"
          >
            🔗 LinkedIn
          </a>
        </div>
      </motion.section>

      {/* DIVIDER */}
      <motion.div className="divider glow" variants={dividerAnim} initial="hidden" whileInView="visible" />

      {/* ABOUT */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible">
        <h2>🧠 How I Approach Data Science</h2>

        <p className="long-text">
          My approach to data science combines systems thinking with applied
          machine learning. My background in Electrical and Electronics
          Engineering trained me to think rigorously about signals, constraints,
          and performance trade-offs, which now shapes how I approach data
          modeling, feature engineering, and analytical problem-solving.
        </p>

        <p className="long-text">
          I go beyond model training to build complete data science workflows—
          from data ingestion and exploratory analysis to feature engineering,
          optimization, model evaluation, and deployment considerations. I
          prioritize robustness, interpretability, and real-world relevance to
          ensure insights and models remain effective beyond controlled
          environments.
        </p>
      </motion.section>

      {/* DIVIDER */}
      <motion.div className="divider" variants={dividerAnim} initial="hidden" whileInView="visible" />

      {/* PROJECTS */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible">
        <h2>🚀 Engineering Problems I’ve Solved</h2>

        {[
          {
            title: "🧬 AI in Medical Affairs — Strategic Optimization",
            body:
              "Designed a decision-intelligence system to resolve infeasible sales and margin targets across hierarchical pharmaceutical portfolios. Modeled Portfolio-to-Segment constraints using Linear Programming, identified infeasibility early, and optimized profit under operational constraints. Built interactive dashboards that helped stakeholders understand trade-offs rather than blindly trust outputs.",
            tech:
              "Python · Linear Programming · PuLP · Optimization Theory · Streamlit · Plotly"
          },
          {
            title: "⚙️ NASA Bearing Fault Detection — Predictive Maintenance",
            body:
              "Engineered a hybrid CNN–LSTM architecture on NASA’s IMS Bearing dataset to predict Remaining Useful Life of mechanical components. Extracted vibration-domain features including FFT, wavelets, RMS, and spectral entropy to enable early fault detection and reduce industrial downtime risk.",
            tech:
              "TensorFlow · CNN-LSTM · Signal Processing · Time Series · Feature Engineering"
          },
          {
            title: "🛰 Satellite Image Intelligence — EuroSAT",
            body:
              "Benchmarked convolutional neural networks on satellite imagery and applied pruning and quantization techniques to balance accuracy and computational efficiency. Focused on deployment-aware design for resource-constrained environments.",
            tech:
              "PyTorch · Computer Vision · Model Pruning · Quantization · Deep Learning"
          },
          {
            title: "🏠 Customer Segmentation — Caddo Holdings (Texas)",
            body:
              "Built scalable customer segmentation and predictive modeling pipelines to identify high-value prospects in the real-estate domain. Translated raw customer data into actionable insights and delivered interactive Tableau dashboards that supported data-driven market expansion.",
            tech:
              "Python · Clustering · Predictive Modeling · Scikit-learn · Tableau"
          },
          {
            title: "📊 ACME Analytics & Decision Intelligence Platform",
            body:
              "Designed and implemented an end-to-end analytics platform integrating machine learning outputs, KPIs, and optimization insights. Focused on transparency and interpretability to help decision-makers understand not just what the model predicts, but why.",
            tech:
              "Python · Streamlit · SQL · ETL Pipelines · Data Visualization"
          }
        ].map((p, i) => (
          <motion.div key={i} className="project" whileHover={{ y: -12 }}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <p className="tech">{p.tech}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* DIVIDER */}
      <motion.div className="divider glow" variants={dividerAnim} initial="hidden" whileInView="visible" />

      {/* PROFESSIONAL JOURNEY */}
      <motion.section className="section" variants={fadeUp} initial="hidden" whileInView="visible">
        <h2>🏢 Professional Journey</h2>

        <div className="experience">
          <h3>🎓 Admissions Supervisor — Arizona State University</h3>
          <ul>
            <li>Led high-volume admissions data workflows supporting thousands of student records.</li>
            <li>Improved data accuracy by 20% through process analysis, automation, and quality checks.</li>
            <li>Mentored teams and ensured compliance in operational environments.</li>
          </ul>
        </div>

        <div className="experience">
          <h3>📝 Assistant Recorder — Arizona Digital Health Symposium</h3>
          <ul>
            <li>Documented interdisciplinary research discussions across digital health and AI.</li>
            <li>Translated complex technical conversations into structured strategic summaries.</li>
            <li>Collaborated with faculty, clinicians, and industry professionals.</li>
          </ul>
        </div>

        <div className="experience">
          <h3>📘 Machine Learning Trainee — INSOFE</h3>
          <ul>
            <li>Built strong foundations in supervised and unsupervised learning, CNNs, and NLP.</li>
            <li>Developed intuition for feature engineering, model selection, and evaluation.</li>
          </ul>
        </div>

        <div className="experience">
          <h3>🧪 Machine Learning Engineer Intern — INSOFE</h3>
          <ul>
            <li>Worked on real-world client problems including customer segmentation and forecasting.</li>
            <li>Built scalable Python pipelines and business-facing dashboards.</li>
          </ul>
        </div>

        <div className="experience">
          <h3>🚀 Machine Learning Engineer — INSOFE</h3>
          <ul>
            <li>Designed and deployed production-grade ML systems across NLP and predictive analytics.</li>
            <li>Built ETL pipelines and performed hyperparameter tuning for performance improvement.</li>
            <li>Integrated models into production workflows with focus on reliability and scalability.</li>
          </ul>
        </div>
      </motion.section>

      {/* DIVIDER */}
      <motion.div className="divider" variants={dividerAnim} initial="hidden" whileInView="visible" />

      {/* CONNECT */}
      <motion.section className="section connect" variants={fadeUp} initial="hidden" whileInView="visible">
        <h2>🤝 Let’s Connect</h2>

        <p className="long-text">
          I’m always open to conversations around data science, machine learning,
          and building intelligent systems. Whether it’s a full-time opportunity,
          collaboration, or just a meaningful discussion—I’d love to connect.
        </p>

        <div className="contact-grid">
          <div>
            <p><strong>📧 Email:</strong> sruthikeerthana960@gmail.com</p>
            <p><strong>📞 Phone:</strong> (602) 730-4639</p>
            <p><strong>📍 Location:</strong> Tempe, Arizona</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="4" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer>
        <p>✨ Designing AI systems that thrive beyond theory.</p>
        <p className="contact">
          Sruthi Keerthana Nuttakki · sruthikeerthana960@gmail.com · Tempe, AZ
        </p>
      </footer>

    </div>
  );
}

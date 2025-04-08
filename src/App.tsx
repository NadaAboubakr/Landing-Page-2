import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, GraduationCap, Briefcase, FileText, Code } from 'lucide-react';
import { SiX } from 'react-icons/si';
import GalaxyBackground from "./GalaxyBackground";

function App() {
  return (
<div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen px-6 py-12 relative overflow-hidden">
      {/* Star Background */}
      <div className="absolute inset-0 z-0">
      <div>
      <GalaxyBackground />
    </div>      </div>
      <div className="relative z-10">
      {/* Hero Section */}
      <header className="relative bg-gray-950 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Nada Aboubakr
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-300 sm:text-2xl md:mt-5 md:max-w-3xl">
            Turning numbers into stories.
            </p>
            <div className="mt-5 max-w-md mx-auto flex justify-center space-x-4">
              <a href="https://github.com/NadaAboubakr" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/nadaaboubakr/" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/_nada81" className="text-gray-400 hover:text-white">
                <SiX size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-20">
          <div className="bg-gray-800 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              A Data Scientist, passionate about transforming complex data into actionable insights. 
              With experience in machine learning, predictive modeling, and data analysis, I strive to 
              create impactful solutions that drive decision-making and innovation.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <GraduationCap className="text-blue-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
          </div>
          <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 border border-gray-900">
            <h3 className="text-xl font-semibold text-white">Alexandria University</h3>
            <p className="text-gray-300 mt-2">Bachelor of Computer Science in Data Science (2020 - 2024)</p>
            <p className="text-gray-300 mt-1">CGPA: 3.407</p>
            <div className="mt-4">
              <h4 className="font-medium text-blue-300 hover:underline">
                <a href="https://www.linkedin.com/posts/nadaaboubakr_graduationproject-drugguardianpro-datascience-activity-7214317777703079936-ZE2t?utm_source=share&utm_medium=member_desktop">
                  Graduation Project | Enhancing Drug Combination Safety
                </a>
              </h4>
              <p className="text-gray-300 mt-2">
                Designed deep learning models to forecast drug-drug interactions using gene expression and chemical structure data. Constructed 978-dimensional feature vectors, ensuring scalable, interpretable, and robust predictions. Collaborated with a cross-functional team to develop and deploy a cloud-based user interface.
              </p>
            </div>
          </div>
        </section>


        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <Briefcase className="text-blue-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-white mb-6">Professional Experience</h2>
          </div>
          <div className="space-y-6">
          <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 border border-gray-900">
              <h3 className="text-xl font-semibold text-white-900">Freelancer Data Annotator for LLM Development</h3>
              <p className="text-gray-300 mt-1">Appen</p>
              <p className="text-gray-300 mt-4 leading-relaxed">
              Created complex Arabic questions to assess LLM comprehension, 
              ranked and localized content to support benchmark development, 
              and completed tasks efficiently using the Appen Data Annotation Platform (ADAP).
              </p>
            </div>
            <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 border border-gray-900">
            <h3 className="text-xl font-semibold text-white-900">IBM Data Scientist Track Intern</h3>
              <p className="text-gray-300 mt-1">Digital Egypt Pioneers Initiative (DEPI) – Ministry of Communications and Information Technology, Egypt</p>
              <p className="text-gray-300 mt-4 leading-relaxed">
              I completed a six-month data science program focused on machine learning and IBM technologies, where I gained hands-on experience in Python, 
              data visualization, and model development. 
              As part of the program, I built a machine learning model to predict the ten-year risk of coronary heart disease using the Framingham Heart Study dataset, 
              and designed a graphical user interface to make the tool more accessible and user-friendly.
              </p>
            </div>
            <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 border border-gray-900">
            <h3 className="text-xl font-semibold text-white-900">Machine Learning Intern</h3>
              <p className="text-gray-300 mt-1">Technocolabs Softwares Inc.</p>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Participated in a predictive modeling project on mortgage-backed securities, optimizing 
                algorithms for accurate trend prediction. Utilized Flask to deploy machine learning models, 
                demonstrating web development proficiency.
              </p>
            </div>
            <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 border border-gray-900">
            <h3 className="text-xl font-semibold text-white-900">IT & Telecom Intern</h3>
              <p className="text-gray-300 mt-1">Al-Ahli Hospital</p>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Engaged in data analysis endeavors and crafted insightful dashboards catering to the 
                discerning needs of decision-makers at Al-Ahli Hospital.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <Code className="text-blue-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 border border-gray-900">
              <h3 className="text-xl font-semibold text-white-900">Enhancing Drug Combination Safety</h3>
              <p className="text-gray-300 mt-4">
              Developed a deep learning model to forecast drug-drug interactions using gene expression data, 
              designing 978-dimensional vectors from drug properties to improve both interpretability and prediction reliability. 
              Working closely with a multidisciplinary team of six, we built a scalable system with a user-friendly interface and deployed it to the cloud.
              </p>
              <a 
                href="https://github.com/ahmedhozny/drug-guardian-api" 
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 border border-gray-900">
              <h3 className="text-xl font-semibold text-white-900">Coronary Heart Disease Risk Assessment</h3>
              <p className="text-gray-300 mt-4">
              Implemented a supervised learning pipeline on the Framingham Heart Study dataset to predict 10-year coronary heart disease risk, 
              achieving 89% accuracy, and deployed it with a custom-built GUI for streamlined user interaction.
              </p>
              <a 
                href="https://github.com/NadaAboubakr/Coronary-Heart-Disease-Prediction_ALX_AIS3_M1d" 
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 border border-gray-900">
              <h3 className="text-xl font-semibold text-white-900">Mortgage Backed Securities Prediction</h3>
              <p className="text-gray-300 mt-4">
                Utilized supervised machine learning to predict mortgage-backed securities prepayment risk, 
                enhancing financial decision-making with data-driven insights.
              </p>
              <a 
                href="https://github.com/NadaAboubakr/Predictive-Modelling-on-Mortgage-Backed-Securities-Using-Supervised-ML" 
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 border border-gray-900">
              <h3 className="text-xl font-semibold text-white-900">Arabic Suicide Post Detection</h3>
              <p className="text-gray-300 mt-4">
              Collaborated on an NLP-driven project under the OMDENA Alexandria Chapter to build a software application 
              capable of detecting suicidal content in Modern Standard Arabic, supporting efforts to promote mental health awareness.
              </p>
              <a 
                href="https://drive.google.com/file/d/17cjQF-PvGlZ4WXUbAHrks1xP_DPP1lm5/view?usp=sharing" 
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 border border-gray-900">
              <h3 className="text-xl font-semibold text-white-900">Hotel Database Management System</h3>
              <p className="text-gray-300 mt-4">
              Created and implemented a comprehensive relational database management system for a hotel, optimizing data storage and retrieval.
              Produced the system using SQL, ensuring efficient handling of large volumes of data.
              </p>
              <a 
                href="https://github.com/NadaAboubakr/Hotel-DBMS" 
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="bg-gray-800 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-gray-400 mr-2" size={20} />
                <span className="text-grey-500">Doha, Qatar</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-gray-400 mr-2" size={20} />
                <span className="text-grey-500">(+974) 50301605</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-gray-400 mr-2" size={20} />
                <a href="mailto:nadabakr8102@gmail.com" className="text-blue-600 hover:text-blue-700">
                  nadabakr8102@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="text-center">
          <a 
            href="https://drive.google.com/file/d/1_n_0wwmfwNi3KtnUFEm_PkgU4iy9jmz_/view?usp=sharing" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
          >
            <FileText className="mr-2" size={20} />
            View Resume
          </a>
        </section>
      </main>

      <footer className="relative bg-gray-950 shadow-sm bg-opacity-70">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/NadaAboubakr" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nadaaboubakr/" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/_nada81" className="text-gray-400 hover:text-white">
              <SiX size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default App;
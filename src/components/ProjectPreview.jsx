import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Minimize2, Eye } from 'lucide-react';

function ProjectPreview({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (project.type !== 'html-preview') {
    return (
      <div className="mb-6 h-48 bg-gray-800/50 rounded-xl overflow-hidden">
        <img  
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          alt={`Screenshot do projeto ${project.name}`}
          src={project.image}
        />
      </div>
    );
  }

  return (
    <div className="mb-6">
      {/* Preview Controls */}
      <div className="flex justify-end items-center mb-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
        >
          {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>

      {/* Preview Container */}
      <motion.div
        className={`bg-white rounded-xl overflow-hidden border border-gray-600/30 ${
          isExpanded ? 'fixed inset-4 z-50' : 'h-48'
        }`}
        layout
        transition={{ duration: 0.3 }}
      >
        <iframe
          srcDoc={project.htmlContent}
          className="w-full h-full border-none"
          title={`Preview do projeto ${project.name}`}
          sandbox="allow-scripts allow-same-origin"
        />
        
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors z-10"
          >
            <Minimize2 size={16} />
          </button>
        )}
      </motion.div>

      {/* Live Preview Badge */}
      <div className="flex justify-center mt-2">
        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30 flex items-center gap-1">
          <Eye size={12} />
          Preview Ao Vivo
        </span>
      </div>
    </div>
  );
}

export default ProjectPreview;
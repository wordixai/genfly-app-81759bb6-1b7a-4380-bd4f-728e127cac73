import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  remixCount: number;
  avatarSrc?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  image,
  category,
  remixCount,
  avatarSrc,
}) => {
  return (
    <div className="flex flex-col">
      <Link to={`/project/${id}`} className="mb-3">
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
      </Link>
      <div className="flex items-center">
        {avatarSrc && (
          <img
            src={avatarSrc}
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-3"
          />
        )}
        {!avatarSrc && (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 mr-3 flex items-center justify-center text-white font-bold">
            {title.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-medium text-sm">{title}</h3>
          <div className="flex items-center text-xs text-gray-600">
            <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded mr-2">
              {category}
            </span>
            <span>{remixCount} Remixes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
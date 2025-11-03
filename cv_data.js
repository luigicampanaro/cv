// cv_data.js

// 1. Define a temporary object with all your data, using a placeholder for the name
const dataTemplate = {
    personalInfo: {
        name: "Luigi Campanaro", // Replace with your actual name
        title: "Postdoctoral Researcher in Robotics & AI",
        location: "EPFL, Lausanne",
        email: "luigi.campanaro@epfl.ch",
        linkedin: "https://www.linkedin.com/in/luigi-campanaro" // Replace with actual LinkedIn URL
    },
    projects: [
        {
            // MODIFICATION: Using full URL, start, and end
            url: "https://www.youtube.com/watch?v=KSQD553VBH4",
            start: 0, // Start video at 0 seconds
            end: 53,   // End video at 53 seconds
            title: "Differentiable IK with Torch",
            caption: "Differentiable IK with Torch & 6-DoF Joystick"
        },
        {
            // MODIFICATION: Using full URL (youtu.be format), start, and end
            url: "https://youtu.be/6H6nOK-wYZo",
            start: 0, // Start video at 0 seconds
            end: 53,   // End video at 53 seconds
            title: "Differentiable IK with Torch",
            caption: "Differentiable IK with Torch & 6-DoF Joystick"
        },
        {
            // MODIFICATION: Using full URL (youtu.be format), start, and end
            url: "https://youtu.be/fWkwXNmpbcM",
            start: 0,  // Start video at 0 seconds
            end: 30,   // End video at 30 seconds
            title: "Custom Bimanual Setup",
            caption: "EPFL Custom Bimanual Setup"
        },
        {
            // MODIFICATION: Using full URL (YouTube Shorts format), start, and end
            url: "https://youtube.com/shorts/WuG9PR8-IJ0",
            start: 15, // Start video at 15 seconds
            end: 60,   // End video at 60 seconds
            title: "Fourth Project Video",
            caption: "Advanced Manipulation Research"
        }
    ],
    experience: [
        {
            title: "Postdoctoral Researcher",
            meta: "EPFL (École Polytechnique Fédérale de Lausanne) · Lausanne · July 2025 - Present",
            description: "Developing a custom bimanual setup that will be used for large-scale data collection on advanced robotic tasks."
        },
        {
            title: "Visiting Postdoctoral Researcher",
            meta: "University of Oxford · Oxford · March 2024 - April 2025",
            description: "Engineered a differentiable Inverse Kinematics solution using Torch and developed a 6-DoF joystick, drastically reducing cost compared to commercial alternatives."
        },
        {
            title: "EPSRC Doctoral Prize Fellowship",
            meta: "The Open University · Milton Keynes · March 2024 - April 2025",
            description: "Designed and fabricated custom UMI-style grippers, performing extensive testing on various object manipulations (e.g., burger and pizza making)."
        }
    ],
    education: [
        {
            title: "PhD in Robotics & AI",
            meta: "University of Oxford · Oxford · Oct. 2018 - Oct. 2023",
            description: "Thesis: Streamlined Domain Randomization for Sim-to-Real Transfer in Deep-Reinforcement Learning."
        },
        {
            title: "MSc-exchange in Soft-Robotics",
            meta: "EPFL (École Polytechnique Fédérale de Lausanne) · Lausanne · Oct. 2017 - Mar. 2018",
            description: "Project: Sensor integration and controller design for a tensegrity-modular robot."
        },
        {
            title: "MSc in Mechatronic Engineering",
            meta: "Politecnico di Torino · Turin · Sep. 2016 - Apr. 2018"
        },
        {
            title: "BSc in Mechanical Engineering",
            meta: "Politecnico di Bari"
        }
    ],
    skills: [
        {
            category: "Programming",
            details: "Python (Torch, NumPy), C++, Matlab/Octave"
        },
        {
            category: "Software & Tools",
            details: "OnShape, Simulink, Fluidsim, ROS"
        },
        {
            category: "Development Tools",
            details: "LaTeX, Office Suite, Git"
        },
        {
            category: "Languages",
            details: "English (Fluent), Italian (Native)"
        }
    ],
    publications: [
        {
            paperTitle: "\"Learning and Deploying Robust Locomotion Policies with Minimal Dynamics Randomization\"",
            authors: "<strong>Campanaro L.</strong>, Gangapurwala S., Merkt W., Havoutis I.",
            url: "https://example.com/publication1"
        },
        {
            paperTitle: "\"Roll-Drop: accounting for observation noise with a single parameter\"",
            authors: "<strong>Campanaro L.</strong>, De Martini D., Gangapurwala S., Merkt W., Havoutis I.",
            url: "https://example.com/publication2"
        },
        {
            paperTitle: "\"Learning Low-Frequency Motion Control for Robust and Dynamic Robot Locomotion\"",
            authors: "Gangapurwala S., <strong>Campanaro L.</strong>, Havoutis I.",
            url: "https://example.com/publication3"
        }
    ],
    awards: [
        "<strong>World Championship:</strong> 1st & 3rd place RoboCraft by FJ, Bari, Jan. 2016",
        "<strong>Award:</strong> 2nd place SeaFuture 2018, La Spezia, Jun. 2018"
    ],
    academicServices: [
        "Peer Reviewer for IEEE Transactions on Robotics",
        "Peer Reviewer for IEEE International Conference on Robotics and Automation (ICRA)",
        "Demonstrator at P5 Computing, University of Oxford"
    ],
    footer: {
        // Placeholder for the dynamic name
        copyright: "Copyright © 2025 __NAME__. All rights reserved."
    }
};

// 2. Create the final cvData object by substituting the name using a template literal
const cvData = {
    ...dataTemplate, // Copy all existing data
    footer: {
        // Use a template literal to insert the name from personalInfo
        copyright: `Copyright © 2025 ${dataTemplate.personalInfo.name}. All rights reserved.`
    }
};
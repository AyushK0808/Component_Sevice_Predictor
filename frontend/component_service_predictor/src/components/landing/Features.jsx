import { cn } from "../../lib/utils";
import {
  IconChartLine,
  IconLayersLinked,
  IconFileAnalytics,
  IconRobot,
  IconBell,
  IconSettingsAutomation,
  IconTool,
  IconUserCircle,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Predictive Analytics",
      description:
        "Anticipate component failures using historical telematics data.",
      icon: <IconChartLine />,
    },
    {
      title: "LSTM Model",
      description:
        "Utilizes an LSTM neural network to predict equipment states and breakdowns.",
      icon: <IconLayersLinked />,
    },
    {
      title: "Automated Reports",
      description:
        "Daily PDF reports with graphical analyses and actionable insights.",
      icon: <IconFileAnalytics />,
    },
    {
      title: "24/7 Support",
      description: "Interactive chatbot for quick issue reporting and guidance.",
      icon: <IconRobot />,
    },
    {
      title: "Service Reminders",
      description:
        "Automated reminders based on model predictions to ensure timely maintenance.",
      icon: <IconBell />,
    },
    {
      title: "Proactive Maintenance",
      description:
        "Keep your machines running efficiently with proactive measures.",
      icon: <IconSettingsAutomation />,
    },
    {
      title: "Feature Customization",
      description:
        "Tailor suggestions to extend the life of your machines.",
      icon: <IconTool />,
    },
    {
      title: "User-Friendly Interface",
      description:
        "Navigate and access data with ease through an intuitive UI.",
      icon: <IconUserCircle />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-60 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-blue-900 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-70 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-blue-900 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-900 dark:bg-blue-900 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}

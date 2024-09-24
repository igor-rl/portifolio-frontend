import {
  CheckBadgeIcon,
  CircleStackIcon,
  CloudIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  TableCellsIcon,
} from '@heroicons/react/16/solid';
import AboutDesktopNavegationButton from '../about-desktop-navegation-button';

const LefthNavButtons = () => (
  <div className="hidden md:flex md:w-full md:flex-col md:overflow-y-scroll md:bg-slate-800 md:pt-2">
    <AboutDesktopNavegationButton
      name="Resulm"
      icon={<DocumentTextIcon className="h-6" />}
      href="#resumo"
    />
    <AboutDesktopNavegationButton
      name="Soft Skills"
      icon={<CheckBadgeIcon className="h-6" />}
      href="#skills"
    />
    <AboutDesktopNavegationButton
      name="Productivity"
      icon={<PresentationChartLineIcon className="h-6" />}
      href="#productivity"
    />
    <AboutDesktopNavegationButton
      name="Cloud, Build and automation"
      icon={<CloudIcon className="h-6" />}
      href="#cloud"
    />
    <AboutDesktopNavegationButton
      name="Development"
      icon={<CodeBracketIcon className="h-6" />}
      href="#development"
    />
    <AboutDesktopNavegationButton
      name="Database"
      icon={<CircleStackIcon className="h-6" />}
      href="#database"
    />
    <AboutDesktopNavegationButton
      name="Professional History"
      icon={<TableCellsIcon className="h-6" />}
      href="#history"
    />
  </div>
);
export default LefthNavButtons;

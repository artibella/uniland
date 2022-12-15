import { DefaultNotImplementedComponent } from '@uniformdev/canvas-react';
import Navigation from '../components/Navigation';
import Card from '../components/GenericCard';
import GenericHero from '../components/GenericHero';
import SectionContainer from '../components/SectionContainer';
import GridContainer from '../components/GridContainer';
import TextBlock from '../components/TextBlock';
import ImageBlock from '../components/ImageBlock';
import ContributorList from '../components/ContributorList';
import HowtoSection from '../components/HowtoSection';
import HowtoStep from '../components/HowtoStep';
import CallToAction from '../components/CallToAction';
import Linklist from '../components/LinkList';
import LinklistItem from '../components/LinkListItem';
import Tag from '../components/Tag';
import TabContainer from '../components/TabContainer';
import TabPanel from '../components/TabPanel';
import LottieAnimation from '../components/LottieAnimation';

const ComponentsMap = {
  navigation: Navigation,
  genericCard: Card,
  hero: GenericHero,
  sectionContainer: SectionContainer,
  gridContainer: GridContainer,
  textBlock: TextBlock,
  imageBlock: ImageBlock,
  contributorList: ContributorList,
  howtoSection: HowtoSection,
  howtoStep: HowtoStep,
  callToAction: CallToAction,
  linkList: Linklist,
  linkListItem: LinklistItem,
  tag: Tag,
  tabContainer: TabContainer,
  tabPanel: TabPanel,
  lottieAnimation: LottieAnimation
};

const appRenderer = (component)  => {
  const componentName = component.type;
  return ComponentsMap[componentName] || DefaultNotImplementedComponent;
};

export default appRenderer;

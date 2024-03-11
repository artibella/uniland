import { registerUniformComponent } from '@uniformdev/canvas-react';
import Navigation from './Navigation';
import Card from './GenericCard';
import GenericHero from './GenericHero';
import SectionContainer from './SectionContainer';
import GridContainer from './GridContainer';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';
import ContributorList from './ContributorList';
import CallToAction from './CallToAction';
import Linklist from './LinkList';
import LinklistItem from './LinkListItem';
import Tag from './Tag';
import TabContainer from './TabContainer';
import TabPanel from './TabPanel';
import LottieAnimation from './LottieAnimation';
import TwoColumns from './TwoColumns';
import BrickContainer from './BrickContainer';
import QuoteBlock from './QuoteBlock';
import Heading from './Heading';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import ImageGallery from './ImageGallery';
import Logos from './Logos';
import Pagination from './Pagination';
import Button from './Button';

const ComponentsMap = {
  navigation: Navigation,
  card: Card,
  hero: GenericHero,
  sectionContainer: SectionContainer,
  gridContainer: GridContainer,
  textBlock: TextBlock,
  imageBlock: ImageBlock,
  contributorList: ContributorList,
  callToAction: CallToAction,
  linkList: Linklist,
  linkListItem: LinklistItem,
  badge: Tag,
  tabContainer: TabContainer,
  tabPanel: TabPanel,
  lottieAnimation: LottieAnimation,
  twoColumns: TwoColumns,
  brick: BrickContainer,
  quoteBlock: QuoteBlock,
  heading: Heading,
  accordion: Accordion,
  accordionItem: AccordionItem,
  imageGalleryBlock: ImageGallery,
  logos: Logos,
  pagination: Pagination,
  button: Button,
};

const initComponents = () => {
  for (let component in ComponentsMap) {
    registerUniformComponent({
      type: component,
      component: ComponentsMap[component],
    });
  }
};

export default initComponents;

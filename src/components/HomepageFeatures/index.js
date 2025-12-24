import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { getFeatures } from "../../config/configHelpers";

const featuresData = getFeatures();

// Map features to include the SVG component
const FeatureList = featuresData.map(feature => ({
  ...feature,
  Svg: require(`@site/static/img/${feature.svg}`).default,
}));

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

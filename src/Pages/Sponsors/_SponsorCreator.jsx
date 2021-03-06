import * as React from 'react';

import {Guac} from 'guac-hoc/lib/Guac';
import {Row, Col} from 'yui-md/lib';
import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';
import LazyLoad from 'react-lazy-load';

/*
  Props:
  - sponsors <array<object>>: see static/data/sponsors for structure.
*/
class _SponsorCreator extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  calcSponsorComponents(sponsors, current) {
    let currentSponsors = sponsors.filter(s => s.current === current)
    let sponsorComponents = [];
    for (var i in currentSponsors) {
      let sponsor = currentSponsors[i];
      sponsorComponents.push(
        <Col key={i} xs={6} md={4} lg={3}>
          <Card>
            <CardImageArea>
              <LazyLoad debounce={false} throttle={50}>
                <img src={sponsor.img}/>
              </LazyLoad>
            </CardImageArea>
            <CardTextArea>
              <a className={'title'} href={sponsor.href}>{sponsor.name}</a>
              <p className={'name subheader'}>{sponsor.type}</p>
            </CardTextArea>
          </Card>
        </Col>
      );
    }
    return sponsorComponents;
  }

  render() {
    return (
      <Row>
        {this.calcSponsorComponents(this.props.sponsors, this.props.current)}
      </Row>
    );
  }
}

_SponsorCreator.defaultProps = {
  sponsors: [],
  current: true,
};

_SponsorCreator = Guac(_SponsorCreator);

export default _SponsorCreator;
export {_SponsorCreator};

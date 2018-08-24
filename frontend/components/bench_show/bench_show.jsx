import React from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchDetail from './bench_detail';
import { ProtectedRoute } from '../../util/route_util';
import ReviewFormContainer from './review_form_container';
import { ReviewLink } from '../../util/link_util';

const BenchShow = ({ benchId, bench, fetchBench, reviews }) => {

  const benches = {[benchId]: bench}
  return(
    <div className="main-container">
      <div className="left-half">
        <BenchMap
          benches={benches}
          benchId={benchId}
          singleBench={true}
          fetchBench={fetchBench}
        />

      </div>
      <div className="right-half">
        <BenchDetail bench={bench} reviews={reviews}/>
        <br/>
        <ReviewLink
          className="button"
          component={ReviewFormContainer}
          to={`/benches/${benchId}/review`}
          label="Leave a Review"
        />
        <ProtectedRoute path="/benches/:benchId/review" component={ReviewFormContainer} />
      </div>
    </div>
  )
}

export default BenchShow;

import React from "react";
import "./latest.css";

const Latest = () => {
  return (
    <div className="latest-container">
      <img
        className="latest-img"
        src="//wwfint.awsassets.panda.org/img/original/1_309.jpg"
      />
      <div className="blog-container">
      <h2 className="blog-head">EMBEDDING HUMAN RIGHTS IN CONSERVATION</h2>
      <p className="blog-paragraph">
        In 2019, WWF commissioned an independent panel of experts to review how
        we were responding to reports of human rights abuses by some government
        rangers in complex and remote landscapes in Central Africa, India, and
        Nepal. ‘Embedding Human Rights in Nature Conservation - from Intent to
        Action’ is the resulting report published in November 2020. We wanted a
        tough and unbiased evaluation of our efforts in order to continue to
        learn and improve our programs. Importantly, the panel found no evidence
        that WWF staff directed, participated in, or encouraged any abuses. When
        concerns were raised, our staff took actions to respond. The panel was
        also unsparing in its conclusion that we need to do more. We embrace the
        Panel's recommendations, and we are addressing all of them, in addition
        to actions we’ve already taken to better meet our commitments to
        communities. We will report regularly on progress made against these
        actions. The reported abuses committed by some government rangers
        horrify us, and go against all the values we stand for. We feel deep and
        unreserved sorrow for those who have suffered. We are determined to do
        more to make communities’ voices heard, to have their rights respected,
        and to consistently advocate for governments to uphold their human
        rights obligations. Our conviction is that the steps we are taking will
        help safeguard communities and the nature upon which they depend, and
        that we and our partners will deliver more lasting conservation as a
        result.
      </p>
      </div>
    </div>
  );
};

export default Latest;

/* 
<div style="width: 100%;height: 600px;background-size: cover;background-position: center center;position: relative; background-image:url('//wwfint.awsassets.panda.org/img/original/1_309.jpg')"></div>
*/

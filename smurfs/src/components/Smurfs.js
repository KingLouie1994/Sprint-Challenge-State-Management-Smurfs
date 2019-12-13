import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from '../state/actionCreators';
import SmurfsCard from './SmurfsCard';

export function Smurfs({ smurfs, getSmurfs }) {
    useEffect(() => {
        getSmurfs();
    });

    return (
        <div>
            {smurfs.map(smurf => (
                <SmurfsCard smurf={smurf} />
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
      smurfs: state.smurfs
    };
  }
  
  export default connect(mapStateToProps, { getSmurfs })(Smurfs);
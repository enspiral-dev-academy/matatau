import React from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import "./Assessments.css";
import config from "./aws-exports";

Amplify.configure(config);

function Assessments() {
  return (
    <AmplifyAuthenticator>
      <div className="Assessments">
        <header className="Assessments-header">
          <p>
            Welcome to your assessments.
          </p>
        </header>
        <AmplifySignOut />
      </div>
    </AmplifyAuthenticator>
  );
}

export default Assessments;

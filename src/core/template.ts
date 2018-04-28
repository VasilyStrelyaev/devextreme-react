import { PropTypes } from "prop-types";
import * as React from "react";

export class Template extends React.PureComponent<{
    name: string;
    component?: any;
    render?: any;
}, any> {
    public render() {
        return null;
    }
}

(Template as any).propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.func,
    render: PropTypes.func
};
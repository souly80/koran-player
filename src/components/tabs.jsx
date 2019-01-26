import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class NavTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <NoSsr>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs  className="fixTopBar" variant="fullWidth" value={value} onChange={this.handleChange}>
                            <LinkTab className={value === 0 ? "tab-active" : ""} style={{"font-size": "50px"}}  label="سورة" href="page1" />
                            <LinkTab className={value === 1 ? "tab-active" : ""} style={{"font-size": "50px"}}  label="أحزاب" href="page2" />
                            <LinkTab className={value === 2 ? "tab-active" : ""} style={{"font-size": "50px"}}  label="اثمان" href="page3" />
                        </Tabs>
                    </AppBar>
                    {value === 0 && this.props.fetchSongs()}
                    {value === 1 && this.props.fetchAhzab()}
                    {value === 2 && this.props.fetchAthman()}
                </div>
            </NoSsr>
        );
    }
}

NavTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);

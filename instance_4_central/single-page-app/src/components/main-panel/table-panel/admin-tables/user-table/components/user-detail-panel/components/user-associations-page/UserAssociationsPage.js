import React from 'react';
import PropTypes from 'prop-types';
import RolesCompactView from './roles-compact-view/RolesCompactView'
import UserAssociationsMenuTabs from './UserAssociationsMenuTabs'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0),
    minHeight: `calc(57vh + 84px)`,
  },
  menu: {
    marginTop: theme.spacing(0),
  }
}));

export default function UserAssociationsPage(props) {
  const classes = useStyles();
  const {
    item,
    deleted,
    handleClickOnRoleRow,
  } = props;
  const [associationSelected, setAssociationSelected] = React.useState('roles');

  const handleAssociationClick = (event, newValue) => {
    setAssociationSelected(newValue);
  }

  return (
    <Fade in={!deleted} timeout={500}>
      <Grid
        className={classes.root} 
        container 
        justify='center'
        alignItems='flex-start'
        alignContent='flex-start'
        spacing={2}
      > 
        {/* Menu Tabs: Associations */}
        <Grid item xs={12} sm={10} md={9} lg={8} xl={7} className={classes.menu}>
          <UserAssociationsMenuTabs
            associationSelected={associationSelected}
            handleClick={handleAssociationClick}
          />
        </Grid>

        {/* Roles Compact View */}
        {(associationSelected === 'roles') && (
          <Grid item xs={12} sm={10} md={9} lg={8} xl={7}>
            <RolesCompactView
              item={item}
              handleClickOnRoleRow={handleClickOnRoleRow}
            />
          </Grid>
        )}

      </Grid>
    </Fade>
  );
}
UserAssociationsPage.propTypes = {
  item: PropTypes.object.isRequired,
  deleted: PropTypes.bool,
  handleClickOnRoleRow: PropTypes.func.isRequired, 
};

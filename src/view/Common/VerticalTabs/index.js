import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: '340px',
      justifyContent: 'space-evenly',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    children: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  { name: 'verticalTabs' }
)

export default function VerticalTabs({
  children,
  onTabClick = () => {},
  tabs = [],
}) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    onTabClick(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {tabs.map(({ label, value }) => (
          <Tab
            key={`vertical-tab-${value}`}
            label={label}
            {...a11yProps(value)}
          />
        ))}
      </Tabs>
      <div className={classes.children}>{children}</div>
    </div>
  )
}

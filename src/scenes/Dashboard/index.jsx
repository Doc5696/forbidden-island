import React, { useState } from 'react'

import {
  Grid,
  Tabs,
  Tab
} from '@material-ui/core'

import Header from '../../Shared/Header'

import TabItem from './components/TabItem'

function Dashboard() {

  const tabs = [
    {
      index: 0,
      label: 'Dashboard',
      component: ''
    },
    {
      index: 1,
      label: 'My Network',
      component: ''
    },
    {
      index: 2,
      label: 'Messages',
      component: ''
    },
    {
      index: 3,
      label: 'Settings',
      component: ''
    },
    {
      index: 4,
      label: 'Store',
      component: ''
    },
  ]

  const [active, setActive] = useState(tabs[0])

  const handleChange = (event, newValue) => {
    setActive(tabs[newValue])
  }

  const isHidden = currIndex => {
    return active.index !== currIndex
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={3}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={active.index}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          {tabs.map(tab => (
            <Tab
              key={tab.index}
              label={tab.label}
            />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={9}>
        <TabItem
          index={active.index}
          isHidden={isHidden(active.index)}
        />
      </Grid>
    </Grid>
  )
}

export default Dashboard

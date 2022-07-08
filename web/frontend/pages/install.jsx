import { Layout, Page, SettingToggle, TextStyle } from '@shopify/polaris'
import { useState } from 'react'

const install = () => {
  const [isInstalled, setIsInstalled] = useState(null)
  const titleDescription = isInstalled ? 'Uninstall' : 'Install'
  const bodyDescription = isInstalled ? 'Installed' : 'Uninstalled'
  const handleAction = () => {
    setIsInstalled((value) => !value)
  }
  return (
    <Page>
      <Layout.AnnotatedSection
        title={`${titleDescription} App`}
        description='Toggle banner installation on your shop'
      >
        <SettingToggle
          action={{
            content: titleDescription,
            onAction: handleAction,
          }}
          enabled={true}
        >
          The banner is{' '}
          <TextStyle variation='strong'>{bodyDescription}</TextStyle>
        </SettingToggle>
      </Layout.AnnotatedSection>
    </Page>
  )
}

export default install

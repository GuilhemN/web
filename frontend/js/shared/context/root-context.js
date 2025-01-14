import React from 'react'
import PropTypes from 'prop-types'
import { ApplicationProvider } from './application-context'
import { EditorProvider } from './editor-context'
import createSharedContext from 'react2angular-shared-context'
import { ChatProvider } from '../../features/chat/context/chat-context'
import { LayoutProvider } from './layout-context'
import { CompileProvider } from './compile-context'

export function ContextRoot({ children, ide, settings }) {
  return (
    <ApplicationProvider>
      <EditorProvider ide={ide} settings={settings}>
        <CompileProvider $scope={ide.$scope}>
          <LayoutProvider $scope={ide.$scope}>
            <ChatProvider>{children}</ChatProvider>
          </LayoutProvider>
        </CompileProvider>
      </EditorProvider>
    </ApplicationProvider>
  )
}

ContextRoot.propTypes = {
  children: PropTypes.any,
  ide: PropTypes.any.isRequired,
  settings: PropTypes.any.isRequired,
}

export const rootContext = createSharedContext(ContextRoot)

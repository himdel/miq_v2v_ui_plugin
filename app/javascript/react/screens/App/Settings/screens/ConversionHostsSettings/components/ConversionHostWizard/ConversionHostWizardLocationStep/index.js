import { connect } from 'react-redux';
import ConversionHostWizardLocationStep from './ConversionHostWizardLocationStep';

import * as SettingsActions from '../../../../../SettingsActions';

import { stepIDs } from '../ConversionHostWizardConstants';

const mapStateToProps = ({
  form,
  providers: { providers },
  settings: { isFetchingTargetComputeResources, targetComputeResources }
}) => ({
  locationStepForm: form[stepIDs.locationStep],
  providers,
  isFetchingTargetComputeResources,
  targetComputeResources
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign(stateProps, ownProps.data, dispatchProps);

export default connect(
  mapStateToProps,
  SettingsActions,
  mergeProps
)(ConversionHostWizardLocationStep);

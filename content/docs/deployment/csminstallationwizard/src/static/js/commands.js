/*
 *
 * Copyright © 2023 Dell Inc. or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
var commandTitle = 'Run the following commands to install';
var commandNote = 'Ensure that the namespaces and secrets are created before installing the helm chart';
var command1 = 'helm repo add dell https://dell.github.io/helm-charts';
var command2 = 'helm install $release-name  dell/container-storage-modules -n [namespace] -f values.yaml'
var command3 = 'helm install $release-name  dell/container-storage-modules -f values.yaml';
var nodeSelectorNote = 'For the pod to be eligible to run on a node, the node must have the indicated key-value pair as label';

const snapshotNote = 'If Snapshot is enabled, ensure the Snapshot CRDs are installed';
const veleroNote = 'If Velero is enabled, please add the respective credentials and configurations in the YAML file.';
const podmonNote = 'Uncomment tolerations under node property, if CSM for Resiliency and CSI Driver pods monitor are enabled in the generated YAML';
const authorizationNote ='Only the Authorization sidecar is enabled by the CSM Installation Wizard. The Proxy Server has to be installed and configured separately';

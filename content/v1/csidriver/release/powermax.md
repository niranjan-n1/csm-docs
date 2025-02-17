---
title: PowerMax
description: Release notes for PowerMax CSI driver
---

## Release Notes - CSI PowerMax v2.5.0

> Note: Starting from CSI v2.4.0, Only Unisphere 10.0 REST endpoints are supported. It is mandatory that Unisphere should be updated to 10.0. Please find the instructions [here.](https://dl.dell.com/content/manual34878027-dell-unisphere-for-powermax-10-0-0-installation-guide.pdf?language=en-us&ps=true)

### New Features/Changes
- [Added support for Kubernetes 1.25.](https://github.com/dell/csm/issues/478)
- [csi-reverseproxy is mandated along with the driver](https://github.com/dell/csm/issues/495)
- [Added support for auto RDM for vSphere over FC](https://github.com/dell/csm/issues/528)
- [Added support for OpenShift 4.11](https://github.com/dell/csm/issues/480)
- [SLES 15 SP4 support added](https://github.com/dell/csm/issues/539)

>Note: Replication for PowerMax is supported in Kubernetes 1.25.
>Replication is not supported with VMware/Vsphere virtualization support.

### Fixed Issues
There are no fixed issues in this release.

### Known Issues

| Issue | Workaround |
|-------|------------|
| Unable to update Host: A problem occurred modifying the host resource | This issue occurs when the nodes do not have unique hostnames or when an IP address/FQDN with same sub-domains are used as hostnames. The workaround is to use unique hostnames or FQDN with unique sub-domains|
| When a node goes down, the block volumes attached to the node cannot be attached to another node | This is a known issue and has been reported at https://github.com/kubernetes-csi/external-attacher/issues/215. Workaround: <br /> 1. Force delete the pod running on the node that went down <br /> 2. Delete the volumeattachment to the node that went down. <br /> Now the volume can be attached to the new node |

### Note:

- Support for Kubernetes alpha features like Volume Health Monitoring and RWOP (ReadWriteOncePod) access mode will not be available in Openshift environment as Openshift doesn't support enabling of alpha features for Production Grade clusters.

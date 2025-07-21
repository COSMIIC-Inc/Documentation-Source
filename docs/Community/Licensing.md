---
sidebar_position: 2
---

# Licensing

How you can use and redistribute our technology and documentation

---

## Summary of Licenses by Material

In July 2024, COSMIIC Inc, a B-corp formed to serve the COSMIIC ecosystem, finalized a license agreement with Case Western Reserve University. The non-exclusive agreement granted COSMIIC Inc the privilege of sublicensing to the world all former intellectual property related to the COSMIIC System + new developments under the NIH SPARC HORNET program.

To ensure maximally-permissive use of COSMIIC source files and documentation, we have chosen mixed license approach to licensing the different materials you will find on our webpages and GitHub. The licenses allow unrestricted development and commercial applications. All we ask of you is that you spread the word and provide attribution to COSMIIC. Below is a summary tofo our approach so that you can always understand how you are able to use our materials.

### Hardware Source File Licensing - CERN-OHL-P-2.0

Hardware-related files are licensed to open source users by COSMIIC under the CERN Open Hardware License - Permissive - v2 (CERN-OHL-P-2.0). Refer to the **[license text](https://ohwr.org/cern_ohl_p_v2.txt)** and **[user guide](https://ohwr.org/project/cernohl/-/wikis/uploads/8a6b5d01f71c207c49493e4d114d61e6/cern_ohl_p_v2_howto.pdf)** to understand your permissions.

All files of this category are hosted across COSMIIC GitHub repositories. This includes, but is not limited to...

- Mechanical Design
    - 3D CAD Files (parts and assemblies, multiple file types)
    - Mechanical Drawings (parts and assemblies, mulitple file types)
- PCB Design
    - Fabrication (Gerber and Drill files)
    - Assembly (Pick and Place, BOM)
    - Archive (Schematics, multiple file types)

### Firmware and Software Source File Licensing - MIT

Firmware and software files are licensed to open source users by COSMIIC under the MIT License. Refer to the **[license text](https://mit-license.org/)** to understand your permissions.

All files of this category are hosted across COSMIIC GitHub repositories. This includes, but is not limited to...

- Firmware
    - Module source code (bootloaders and applications)
    - External wireless components source code
- Software
    - API in Matlab
    - Assorted Matlab apps
    - Tools and processes, such as custom linters and GitHub Action workflow files

### Documentation Licensing - CC-BY-4.0

Files containing documentation of the COSMIIC System and user ecosystem in supplement to the above listed filetypes are licensed to open source users by COSMIIC under the Creative Commons Attribution Only License (CC-BY-4.0). Refer to the **[license text](https://creativecommons.org/licenses/by/4.0/legalcode.txt)** to understand your permissions.

Note: Attribution is REQUIRED for sharing of documentation, modified or unmodified. In the case you are redistributing COSMIIC documentation, CC-BY-4.0 mandates that "You must give appropriate credit, provide a link to the license, and indicate if changes were made" (per **[legal code page](https://creativecommons.org/licenses/by/4.0/legalcode.en)**).

These materials are mostly hosted on this site and cosmiic.org. This docs.cosmiic.org site is built using Markdown (.md) files and the Docusaurus tool through GitHub Actions in a **[COSMIIC GitHub repository](https://github.com/COSMIIC-Inc/Documentation-Source)**. Files in the /docs/ folder of this repository are licensed under CC-BY-4.0. This includes, but is not limited to...

- Documentation of system components and system architecture, .md and other archival file types
- Test reports
- Fabrication instructions
- Software build instructions
- Example documents
    - Example IDE
    - Example BEP

### Open Patents 

The COSMIIC system utilizes several open patents. The summary of the most recent patent continuations are highlighted below. 

#### Neural Prosthesis

- Patent No.: US 9,108,060 B2 | Date of Patent File: 08/01/2013 | Date of Patent Issued: 08/18/2015  
  Assignee: Case Western Reserve University                             

- Summary: This invention describes an implantable neural prosthesis system that is modular in nature. There is a central controller    that is able to supply data, signals, and power to various subsystem modules. Each of these modules are programmable for a specific individual need or they can be dynamically aggregated to execute coordinated body movements. The neural system supports bidirectional communication with the modules throughout various regions of the body using wired or wireless connections. The subsystem modules themselves can include sensors for EEG, EMG, EOG, and accelerometers, while also having drug delivery devices and stimulators. A fundamental innovation is that a controller — in real time — is able to reassign devices with the network system to adapt to changing needs, which is able to improve scalability. The neural prosthesis system’s vision is for complete implantation and also have external devices intended for programming, diagnostics, and communication. The final goal is to coordinate the system to perform tasks like grasping or walking for patients with neural injuries. 

- This patent is the continuation of the following parent patents that were filed and issued prior: 

    - Patent No.: US 7,260,436 B2 | Date of Patent File: 10/16/2002 | Date of Patent Issued: 8/21/2007                              
    Assignee: Case Western Reserve University                                 

    - Patent No.: US 8,532,786 B2 | Date of Patent File: 08/21/2007 | Date of Patent Issued: 9/10/2013                                
    Assignee: Case Western Reserve University                                 

    - Patent No.: US 8,768,482 B2 | Date of Patent File: 06/16/2012 | Date of Patent Issued: 06/01/2014                                 
    Assignee: Case Western Reserve University                               

#### Asymmetrical Force Connector System

- Patent No.: US 10,634,181 B2 | Date of Patent File: 03/12/2013 | Date of Patent Issued: 04/28/2020                                  
Assignee: Case Western Reserve University                               

- Summary: This invention utilizes a special socket and connection pin setup to control asymmetric insertion and retraction forces. Specifically, it uses a toroidal canted coil spring that is embedded in a spring-receiving cavity around a longitudinal shaft bore. There is a connector pin with a longitudinally asymmetrical V-groove that can slide into the bore. Upon insertion, the V-groove of the pin aligns with the toroidal canted coil spring and a part of the spring can enter the groove, which is known as a maintenance position. This was carefully designed so that insertion of the pin into the spring needs just a modest force, but retraction needs a much larger force due the shape of the V-groove and spring interaction. This asymmetric force response provides a clear mechanical security against unintended disengagement but when the large retraction force threshold is met, there can be intended disengagement. The patent also covers various methodologies for pin insertion and removal by chronicling the force differentials. 

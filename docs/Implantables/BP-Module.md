---
sidebar_position: 3
---

# BP2 - Biopotential Recording Module

2-channel EMG module

:link: **[Implantables-BiopotentialRecording-Hardware on COSMIIC GitHub](https://github.com/COSMIIC-Inc/Implantables-BiopotentialRecording-Hardware)**

---

## Component Overview

Myoelectric signals (MES) from muscles under voluntary control are recorded by the biopotential recording module (BP). The BP is designed to record myoelectric signals and process those signals for the purposes of neuroprosthetic control. The BP can record MES from two different muscles and process the signals independently for different control needs. The recording electrodes can be either an epimysial or intramuscular design and consist of two metal contacts separated by 1cm for differential recording. The module is sized small enough so that it can be located in the extremities, near the muscles to be recorded from. This has the advantage of reducing the lead length, improving the signal quality and minimizing the range of electrode lead lengths that need to be brought into surgery.

![image](./img/bp.png)

---

## Technical Description

The BP is connected to the NNP network through a single network cable. The BP gains power from the network, receives data from the network that to determine signal processing parameters and other administrative functions, and places two channels of processed myoelectric data on the network for use by any other module connected to the network. The BP has four total network connections, allowing a single BP to branch from a single network input to network output to three additional remote modules. The BP has internal processing based on the AVR-core processor (Atmel AT90CAN128). The processing, network interface and powering is identical to the PG module. Computational processing in the BP is used to identify relevant network data and perform the signal processing on the recorded myoelectric signal.

---

## Documentation

### Mechanical Design Files and Drawings
All files and drawings for the design of the Biopotential Recording Module are available on the COSMIIC GitHub here:

:link: **[Implantables-BiopotentialRecording-Hardware/"Mechanical Design CAD Files" on COSMIIC GitHub](https://github.com/COSMIIC-Inc/Implantables-BiopotentialRecording-Hardware/tree/main/Mechanical%20Design%20CAD%20Files)**

## Coming soon...

Information on the module firmware, fabrication process, manufacturing partners, and how to obtain Biopotential Recording Modules will be uploaded soon.
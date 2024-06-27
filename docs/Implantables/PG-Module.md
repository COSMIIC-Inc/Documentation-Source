---
sidebar_position: 2
---

# Pulse Generator Module

The thing that stimulates muscles

Quick links:

:link: **[Implantables-PulseGenerator-Hardware on COSMIIC GitHub](https://github.com/COSMIIC-Inc/Implantables-PulseGenerator-Hardware)**

:link: **[Implantables-PulseGenerator-Application on COSMIIC GitHub](https://github.com/COSMIIC-Inc/Implantables-PulseGenerator-Application)**


---

## Product Description

![pulse](./img/pg.png)

The four-channel pulse generator module (PG) is a remote module utilized for electrical 
stimulation of nerve and muscle tissue. The PG can deliver stimulation to four 
independent monopolar electrodes, using the metal case of the PG as the common return 
electrode. The PG is small enough to be located in the extremities, including the upper arm 
and forearm, thus minimizing electrode lead length and simplifying surgical lead routing.

The cathodic stimulation output of the PG matches that of the existing implantable neuroprosthetic devices that have been utilized in humans since the 1970’s at the Cleveland FES Center.

The PG is connected to the NNP network through a single network cable.  The PG gains power from the network, receives data from the network that is utilized to determine the stimulation parameters that should be delivered, and places data on the network regarding its status. The PG has four total network connections, allowing a single PG to branch from a single network input to three network outputs.

The PG has internal processing based on the AVR-core processor (Atmel AT90CAN128).  Computational processing is used to identify relevant network data (typically control signal levels from the sensor module) and convert that data into the appropriate stimulus levels to each electrode based on pre-programmed patterns.  These patterns are customized to provide the desired coordinated functional responses from each muscle and nerve.The PG combines three levels of failsafe mechanisms to assure that potentially damaging stimulation is not delivered:  1) hardware limits on total charge per pulse, 2) software limits on stimulation parameters, and 3) failsafe magnetic switches in both the PG and the power module.

## Coming soon...

Specifications, drawings, and test data are on their way.
Information on the fabrication process, manufacturing partners, and how to obtain Network Cables will be uploaded soon.

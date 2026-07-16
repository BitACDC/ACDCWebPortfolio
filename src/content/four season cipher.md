---
title: "Four-Season Cipher"
slug: "four-season-cipher"
client: "Applied Cryptography"
category: "Cryptography Project"
services: "Symmetric Encryption, Cipher Design, Cryptanalysis"
year: "2025"
featuredImage: "../assets/projects/4 season cipher.png"
liveSite: "https://github.com"
description: "A multi-layered encryption system built for Applied Cryptography, featuring four cascaded stages inspired by the seasons, combining Vigenere chaining, Feistel networks, bitwise operations, and CBC-style state propagation."
isFeatured: true
isDraft: false
---

Four-Season Cipher is a multi-phase cascaded symmetric cipher developed for an Applied Cryptography course. Rather than relying on a single encryption technique, the design layers four distinct stages, each named after and structurally inspired by a season, to strengthen the overall cipher through diversity of method.

Spring applies a modified Vigenere chaining technique, Summer introduces Feistel network structures, Autumn layers in bitwise logical operations, and Winter closes the cascade with a CBC cipher using chained state propagation. Each stage builds on the output of the last, so weaknesses in any single technique are offset by the layers around it.

The project combined theoretical research into classical and modern cipher structures with hands-on implementation in Python. As Research Leader and Supporting Back-End Developer, the role involved both designing the cascading logic across all four phases and implementing the supporting cryptographic operations in code.
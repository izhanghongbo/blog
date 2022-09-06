---
title: "Mermaid 使用"
date: 2022-09-01T01:56:45+08:00
draft: false
tags: ["工具"]
categories: ["工具"]
---
## 类图
{{< mermaid >}}
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
            
{{< /mermaid >}}


## 流程图

{{< mermaid >}}
flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

## [手册](https://mermaid-js.github.io/mermaid/#/examples)

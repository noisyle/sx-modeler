const model1 = {
  "resourceId": 3407508,
  "properties": {
    "process_id": "asdf",
    "name": "asdf",
    "processPriority": 0,
    "processUseTaskConf": 0,
    "bpmCategoryId": "1324909669531648",
    "bpmConfBaseId": 1509030376833024,
    "formId": 1325348243357696,
    "bpmProcessId": 1509030385025024,
    "formCode": "zhishutiaoxin",
    "expProperties": {
      "zsApplicantzsworkplace_sid-13F7A418-3428-4550-886C-4BD628259737": {
        "id": 1509319115538432,
        "name": "zsApplicantzsworkplace_sid-13F7A418-3428-4550-886C-4BD628259737",
        "description": "柏秀贞",
        "value": "集团,直属营销中心,天津分公司,天津分公司本部,生态城职场,南海路职场,宁河二职场,北辰职场,业务推动部,业务推动部-数据分析室,业推企划室,行政管理部,行政管理部-人员管理室,行政后援室,培训企划部,活动企划室,培训支持室,教育培训室,业务督导部,滨海版块,市区版块,郊县版块,架构分析发展部,架构分析室,人力发展室,计划财务部,财务室,物资管理室",
        "procId": "1509030385025024",
        "flowId": "sid-13F7A418-3428-4550-886C-4BD628259737",
        "tenantId": "1",
        "status": 1
      },
      "zsApplicantzsworkplace_sid-271A909A-EF06-4436-BD9A-87A104DF12A2": {
        "id": 1509342583275520,
        "name": "zsApplicantzsworkplace_sid-271A909A-EF06-4436-BD9A-87A104DF12A2",
        "description": "韩刚",
        "value": "集团,直属营销中心,天津职场,天津分公司职场,市区一,市区二,津南,八里台,塘沽二,武清,开发区南海路,大无缝,市区直辖,大邱庄,塘沽一,上海道,汉沽二,市区四,军粮城,西青,杭州道,汉沽一,大港,大港油田,静海,宝坻一,宝坻二,蓟县一,蓟县二,李七庄,新华路,红桥,宁波道,市区三,塘沽四,市区五,东丽,华明镇,宁河一,塘沽五",
        "procId": "1509030385025024",
        "flowId": "sid-271A909A-EF06-4436-BD9A-87A104DF12A2",
        "tenantId": "1",
        "status": 1
      }
    }
  },
  "stencil": {
    "id": "BPMNDiagram"
  },
  "childShapes": [
    {
      "resourceId": "sid-72E639AF-D150-407D-837A-4423AE55CF88",
      "properties": {
        "formkeydefinition": "",
        "isCommiter": false,
        "name": "开始",
        "category": "",
        "gatewayType": "",
        "bpmConfUserType": "0",
        "positionName": "",
        "bpmConfRuleName": [],
        "formId": 0,
        "bpmConfFormType": 0,
        "bpmConfNoticeTemplateCode": "arrival-assignee",
        "bpmConfFormOperationValue": [],
        "bpmConfNodeId": 1509030381256704,
        "bpmConfFormValue": ""
      },
      "stencil": {
        "id": "StartNoneEvent"
      },
      "incoming": [],
      "outgoing": [
        {
          "resourceId": "sid-A3A7FE8D-EE35-4078-9228-2AA21016089F"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 40,
          "y": 125
        },
        "lowerRight": {
          "x": 116,
          "y": 201
        }
      }
    },
    {
      "resourceId": "sid-42D84FE1-D13B-469A-B161-1392C32C8D81",
      "properties": {
        "formkeydefinition": "",
        "isCommiter": true,
        "assignee": "常用语:流程发起人",
        "name": "发起人",
        "category": "2",
        "gatewayType": "",
        "bpmConfUserType": "0",
        "positionName": "",
        "bpmConfRuleName": [],
        "formId": 1509029903712256,
        "bpmConfFormType": 0,
        "bpmConfNoticeTemplateCode": "arrival-assignee",
        "bpmConfFormOperationValue": [],
        "bpmConfNodeId": 1509030381355008,
        "bpmConfFormValue": "zhishutiaoxin##发起人##205"
      },
      "stencil": {
        "id": "UserTask"
      },
      "incoming": [
        {
          "resourceId": "sid-A3A7FE8D-EE35-4078-9228-2AA21016089F"
        }
      ],
      "outgoing": [
        {
          "resourceId": "sid-2ED04B1C-9BF6-4046-9A7B-8156B90C1C50"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 210,
          "y": 125
        },
        "lowerRight": {
          "x": 286,
          "y": 201
        }
      }
    },
    {
      "resourceId": "sid-392AD4C4-55C7-46A1-B8B3-B6C7E78B6D74",
      "properties": {
        "formkeydefinition": "",
        "isCommiter": false,
        "name": "结束",
        "category": "",
        "gatewayType": "",
        "bpmConfUserType": "0",
        "positionName": "",
        "bpmConfRuleName": [],
        "formId": 0,
        "bpmConfFormType": 0,
        "bpmConfNoticeTemplateCode": "arrival-assignee",
        "bpmConfFormOperationValue": [],
        "bpmConfNodeId": 1509030384353280,
        "bpmConfFormValue": ""
      },
      "stencil": {
        "id": "EndNoneEvent"
      },
      "incoming": [
        {
          "resourceId": "sid-689B2455-0730-4808-94AB-81B50A7C171A"
        }
      ],
      "outgoing": [],
      "bounds": {
        "upperLeft": {
          "x": 890,
          "y": 125
        },
        "lowerRight": {
          "x": 966,
          "y": 201
        }
      }
    },
    {
      "resourceId": "sid-FC4CDB66-C743-4A04-AABD-724C9877A5BD",
      "properties": {
        "formkeydefinition": "",
        "isCommiter": false,
        "name": "",
        "category": "",
        "gatewayType": "fork",
        "bpmConfUserType": "0",
        "positionName": "",
        "bpmConfRuleName": [],
        "formId": 0,
        "bpmConfFormType": 0,
        "bpmConfNoticeTemplateCode": "arrival-assignee",
        "bpmConfFormOperationValue": [],
        "bpmConfNodeId": 0,
        "bpmConfFormValue": ""
      },
      "stencil": {
        "id": "ExclusiveGateway"
      },
      "incoming": [
        {
          "resourceId": "sid-2ED04B1C-9BF6-4046-9A7B-8156B90C1C50"
        }
      ],
      "outgoing": [
        {
          "resourceId": "sid-13F7A418-3428-4550-886C-4BD628259737"
        },
        {
          "resourceId": "sid-271A909A-EF06-4436-BD9A-87A104DF12A2"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 380,
          "y": 125
        },
        "lowerRight": {
          "x": 456,
          "y": 201
        }
      }
    },
    {
      "resourceId": "sid-54DDA1BF-89C6-449C-AD07-7820C1B92B3B",
      "properties": {
        "formkeydefinition": "",
        "isCommiter": false,
        "name": "",
        "category": "",
        "gatewayType": "join",
        "bpmConfUserType": "0",
        "positionName": "",
        "bpmConfRuleName": [],
        "formId": 0,
        "bpmConfFormType": 0,
        "bpmConfNoticeTemplateCode": "arrival-assignee",
        "bpmConfFormOperationValue": [],
        "bpmConfNodeId": 0,
        "bpmConfFormValue": ""
      },
      "stencil": {
        "id": "ExclusiveGateway"
      },
      "incoming": [
        {
          "resourceId": "sid-A3AB8529-5C18-4B6E-8496-7C1A22B8A701"
        },
        {
          "resourceId": "sid-9595BB9D-F703-4F20-A9FE-040D4E1508AB"
        }
      ],
      "outgoing": [
        {
          "resourceId": "sid-689B2455-0730-4808-94AB-81B50A7C171A"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 720,
          "y": 125
        },
        "lowerRight": {
          "x": 796,
          "y": 201
        }
      }
    },
    {
      "resourceId": "sid-A0723473-3B4A-45FE-AA62-7AED85E45C63",
      "properties": {
        "formkeydefinition": "zhishutiaoxin##柏秀贞##206",
        "isCommiter": false,
        "assignee": 749153228898304,
        "name": "柏秀贞",
        "category": "1",
        "gatewayType": "",
        "bpmConfUserType": "0",
        "positionName": "",
        "bpmConfRuleName": [],
        "formId": 1509029905973248,
        "bpmConfFormType": 0,
        "bpmConfNoticeTemplateCode": "arrival-assignee",
        "bpmConfFormOperationValue": [],
        "bpmConfNodeId": 1509030383271936,
        "bpmConfFormValue": "zhishutiaoxin##柏秀贞##206"
      },
      "stencil": {
        "id": "UserTask"
      },
      "incoming": [
        {
          "resourceId": "sid-13F7A418-3428-4550-886C-4BD628259737"
        }
      ],
      "outgoing": [
        {
          "resourceId": "sid-A3AB8529-5C18-4B6E-8496-7C1A22B8A701"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 550,
          "y": 40
        },
        "lowerRight": {
          "x": 626,
          "y": 116
        }
      }
    },
    {
      "resourceId": "sid-172B63CB-BCB7-41A0-8E83-21C9FA776DB4",
      "properties": {
        "formkeydefinition": "zhishutiaoxin##韩刚##207",
        "isCommiter": false,
        "assignee": 1094,
        "name": "韩刚",
        "category": "1",
        "gatewayType": "",
        "bpmConfUserType": "0",
        "positionName": "",
        "bpmConfRuleName": [],
        "formId": 1509029908201472,
        "bpmConfFormType": 0,
        "bpmConfNoticeTemplateCode": "arrival-assignee",
        "bpmConfFormOperationValue": [],
        "bpmConfNodeId": 1509030384467968,
        "bpmConfFormValue": "zhishutiaoxin##韩刚##207"
      },
      "stencil": {
        "id": "UserTask"
      },
      "incoming": [
        {
          "resourceId": "sid-271A909A-EF06-4436-BD9A-87A104DF12A2"
        }
      ],
      "outgoing": [
        {
          "resourceId": "sid-9595BB9D-F703-4F20-A9FE-040D4E1508AB"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 550,
          "y": 210
        },
        "lowerRight": {
          "x": 626,
          "y": 286
        }
      }
    },
    {
      "resourceId": "sid-A3A7FE8D-EE35-4078-9228-2AA21016089F",
      "properties": {
        "name": "",
        "defaultflow": "false",
        "conditionsequenceflow": "",
        "copyFormId": 0
      },
      "stencil": {
        "id": "SequenceFlow"
      },
      "source": {
        "resourceId": "sid-72E639AF-D150-407D-837A-4423AE55CF88"
      },
      "target": {
        "resourceId": "sid-42D84FE1-D13B-469A-B161-1392C32C8D81"
      },
      "outgoing": [
        {
          "resourceId": "sid-42D84FE1-D13B-469A-B161-1392C32C8D81"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 40,
          "y": 125
        },
        "lowerRight": {
          "x": 210,
          "y": 125
        }
      },
      "dockers": [
        {
          "x": 76,
          "y": 38
        },
        {
          "x": 0,
          "y": 38
        }
      ]
    },
    {
      "resourceId": "sid-689B2455-0730-4808-94AB-81B50A7C171A",
      "properties": {
        "name": "",
        "defaultflow": "false",
        "conditionsequenceflow": "",
        "copyFormId": 0
      },
      "stencil": {
        "id": "SequenceFlow"
      },
      "source": {
        "resourceId": "sid-54DDA1BF-89C6-449C-AD07-7820C1B92B3B"
      },
      "target": {
        "resourceId": "sid-392AD4C4-55C7-46A1-B8B3-B6C7E78B6D74"
      },
      "outgoing": [
        {
          "resourceId": "sid-392AD4C4-55C7-46A1-B8B3-B6C7E78B6D74"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 720,
          "y": 125
        },
        "lowerRight": {
          "x": 890,
          "y": 125
        }
      },
      "dockers": [
        {
          "x": 76,
          "y": 38
        },
        {
          "x": 0,
          "y": 38
        }
      ]
    },
    {
      "resourceId": "sid-2ED04B1C-9BF6-4046-9A7B-8156B90C1C50",
      "properties": {
        "name": "",
        "defaultflow": "false",
        "conditionsequenceflow": "",
        "copyFormId": 0
      },
      "stencil": {
        "id": "SequenceFlow"
      },
      "source": {
        "resourceId": "sid-42D84FE1-D13B-469A-B161-1392C32C8D81"
      },
      "target": {
        "resourceId": "sid-FC4CDB66-C743-4A04-AABD-724C9877A5BD"
      },
      "outgoing": [
        {
          "resourceId": "sid-FC4CDB66-C743-4A04-AABD-724C9877A5BD"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 210,
          "y": 125
        },
        "lowerRight": {
          "x": 380,
          "y": 125
        }
      },
      "dockers": [
        {
          "x": 76,
          "y": 38
        },
        {
          "x": 0,
          "y": 38
        }
      ]
    },
    {
      "resourceId": "sid-13F7A418-3428-4550-886C-4BD628259737",
      "properties": {
        "name": "",
        "defaultflow": "false",
        "conditionsequenceflow": "${((expressionHelper.contain(\"zsApplicantzsworkplace_sid-13F7A418-3428-4550-886C-4BD628259737\",zsApplicantzsworkplace)))}",
        "copyFormId": 1509029903712256
      },
      "stencil": {
        "id": "SequenceFlow"
      },
      "source": {
        "resourceId": "sid-FC4CDB66-C743-4A04-AABD-724C9877A5BD"
      },
      "target": {
        "resourceId": "sid-A0723473-3B4A-45FE-AA62-7AED85E45C63"
      },
      "outgoing": [
        {
          "resourceId": "sid-A0723473-3B4A-45FE-AA62-7AED85E45C63"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 380,
          "y": 40
        },
        "lowerRight": {
          "x": 550,
          "y": 125
        }
      },
      "dockers": [
        {
          "x": 76,
          "y": 38
        },
        {
          "x": 0,
          "y": 38
        }
      ]
    },
    {
      "resourceId": "sid-A3AB8529-5C18-4B6E-8496-7C1A22B8A701",
      "properties": {
        "name": "",
        "defaultflow": "false",
        "conditionsequenceflow": "",
        "copyFormId": 0
      },
      "stencil": {
        "id": "SequenceFlow"
      },
      "source": {
        "resourceId": "sid-A0723473-3B4A-45FE-AA62-7AED85E45C63"
      },
      "target": {
        "resourceId": "sid-54DDA1BF-89C6-449C-AD07-7820C1B92B3B"
      },
      "outgoing": [
        {
          "resourceId": "sid-54DDA1BF-89C6-449C-AD07-7820C1B92B3B"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 550,
          "y": 40
        },
        "lowerRight": {
          "x": 720,
          "y": 125
        }
      },
      "dockers": [
        {
          "x": 76,
          "y": 38
        },
        {
          "x": 0,
          "y": 38
        }
      ]
    },
    {
      "resourceId": "sid-271A909A-EF06-4436-BD9A-87A104DF12A2",
      "properties": {
        "name": "",
        "defaultflow": "false",
        "conditionsequenceflow": "${((expressionHelper.contain(\"zsApplicantzsworkplace_sid-271A909A-EF06-4436-BD9A-87A104DF12A2\",zsApplicantzsworkplace)))}",
        "copyFormId": 1509029903712256
      },
      "stencil": {
        "id": "SequenceFlow"
      },
      "source": {
        "resourceId": "sid-FC4CDB66-C743-4A04-AABD-724C9877A5BD"
      },
      "target": {
        "resourceId": "sid-172B63CB-BCB7-41A0-8E83-21C9FA776DB4"
      },
      "outgoing": [
        {
          "resourceId": "sid-172B63CB-BCB7-41A0-8E83-21C9FA776DB4"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 380,
          "y": 125
        },
        "lowerRight": {
          "x": 550,
          "y": 210
        }
      },
      "dockers": [
        {
          "x": 76,
          "y": 38
        },
        {
          "x": 0,
          "y": 38
        }
      ]
    },
    {
      "resourceId": "sid-9595BB9D-F703-4F20-A9FE-040D4E1508AB",
      "properties": {
        "name": "",
        "defaultflow": "false",
        "conditionsequenceflow": "",
        "copyFormId": 0
      },
      "stencil": {
        "id": "SequenceFlow"
      },
      "source": {
        "resourceId": "sid-172B63CB-BCB7-41A0-8E83-21C9FA776DB4"
      },
      "target": {
        "resourceId": "sid-54DDA1BF-89C6-449C-AD07-7820C1B92B3B"
      },
      "outgoing": [
        {
          "resourceId": "sid-54DDA1BF-89C6-449C-AD07-7820C1B92B3B"
        }
      ],
      "bounds": {
        "upperLeft": {
          "x": 550,
          "y": 125
        },
        "lowerRight": {
          "x": 720,
          "y": 210
        }
      },
      "dockers": [
        {
          "x": 76,
          "y": 38
        },
        {
          "x": 0,
          "y": 38
        }
      ]
    }
  ],
  "bounds": {
    "lowerRight": {
      "x": 1006,
      "y": 326
    },
    "upperLeft": {
      "x": 0,
      "y": 0
    }
  },
  "stencilset": {
    "url": "stencilsets/bpmn2.0/bpmn2.0.json",
    "namespace": "http://b3mn.org/stencilset/bpmn2.0#"
  },
  "ssextensions": []
}

export default {
  model1: model1
}
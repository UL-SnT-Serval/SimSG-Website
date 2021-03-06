/**
 * Listing of the predefined-scenario.
 *
 * This listing should match the one done on creos.simsg.api
 * (see https://github.com/UL-SnT-Serval/creos.simSG.api/tree/master/scenarios)
 */
export enum Scenario {
    SINGLE_CABLE, CABINET, INDIRECT_PARA, PARA_CABINET, PARA_SUBS,
}

export function getScNbFuses(scenario: Scenario): number {
    switch (scenario) {
        case Scenario.SINGLE_CABLE: return 2;
        case Scenario.CABINET: return 6;
        case Scenario.PARA_SUBS: return 6;
        case Scenario.PARA_CABINET: return 8;
        case Scenario.INDIRECT_PARA: return 10;
        default: return -1
    }
}
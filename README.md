<div align="center">
  <img src="./assets/ncl.png" height="200" width="450"/>

  ![Size](https://img.shields.io/github/repo-size/ryancraigmartin/norwegian-cypress?style=plastic&color=green&label=Size)
  ![License](https://img.shields.io/github/license/ryancraigmartin/norwegian-cypress?style=plastic&color=lightgrey&label=License)
  ![Updated](https://img.shields.io/github/last-commit/ryancraigmartin/norwegian-cypress?style=plastic&color=red&label=Updated)
  ![Stars](https://img.shields.io/github/stars/ryancraigmartin/norwegian-cypress?style=plastic&color=ffd500&label=Stars)
  ![Forks](https://img.shields.io/github/forks/ryancraigmartin/norwegian-cypress?style=plastic&color=brightgreen&label=Forks)
  ![Watchers](https://img.shields.io/github/watchers/ryancraigmartin/norwegian-cypress?style=plastic&color=orange&label=Watchers)
  ![Contributors](https://img.shields.io/github/contributors/ryancraigmartin/norwegian-cypress?style=plastic&color=ff69b4&label=Contributors)
  ![Followers](https://img.shields.io/github/followers/ryancraigmartin?style=plastic&color=blue&label=Followers)

</div>

<img src="./assets/scenarios.gif" height="400" width="800"/>

## Cypress test runs for scenarios on the Norwegian Cruise Line Website.

###  Scenarios 2  & 3:
    Scenario 2: Guest explores shore excursions destinations

    GIVEN a Guest
    AND I am on Homepage
    AND I navigated to “Shore Excursion” page
    WHEN I search for destination “Alaska Cruises”
    THEN Shore Excursions page is present
    AND Results are filtered by “Alaska Cruises”
    AND Filter By Ports are only belong to “Alaska, British Columbia”

  ---

    Scenario 3: Guest filters shore excursions results using price range

    GIVEN a Guest
    AND I am on Homepage
    AND I navigated to “Shore Excursion” page
    AND I click Find Excursions
    AND Shore Excursions page is present
    WHEN Price range is filtered to “$0-$30”
    THEN Only shore excursions within range are displayed
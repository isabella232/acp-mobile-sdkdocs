/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
module.exports = {
    pathPrefix: process.env.PATH_PREFIX || '/client-sdks/acp/',
    siteMetadata: {
        versions: [
            {
                title: 'Latest version',
                path: '/client-sdks/documentation',
  
              },
              {
                title: 'Previous versions',
                path: '/client-sdks/acp/documentation',
                selected: true
              }
          ],
        pages: [{
            title: 'Documentation',
            path: '/documentation',
        }],
        subPages: [{
                title: "Home",
                path: "/documentation"
            },
            {
                title: "Current SDK versions",
                path: "documentation/current-sdk-versions"
            },
            {
                title: "Release notes",
                path: "/documentation/release-notes",
                pages: [{
                        title: "2022",
                        path: "/documentation/release-notes"
                    },
                    {
                        title: "2021",
                        path: "/documentation/release-notes/2021"
                    },
                    {
                        title: "2020",
                        path: "/documentation/release-notes/2020"
                    },
                    {
                        title: "2019",
                        path: "/documentation/release-notes/2019"
                    },
                    {
                        title: "2018",
                        path: "/documentation/release-notes/2018"
                    }
                ]
            },
            {
                title: "Version 4 Mobile SDKs end-of-support FAQ",
                path: "/documentation/v4-end-of-life-faq"
            },
            {
                title: "Version 4 API changelog",
                path: "/documentation/api-changelog"
            },
            {
                title: "Mobile Foundation extensions",
                path: "/documentation/mobile-foundation-extensions",
                pages: [{
                        title: "Overview",
                        path: "/documentation/mobile-foundation-extensions"
                    },
                    {
                        title: "Mobile Core",
                        path: "/documentation/mobile-core",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/mobile-core"
                            },
                            {
                                title: "Configuration",
                                path: "documentation/mobile-core/configuration",
                                pages: [{
                                        title: "Overview",
                                        path: "documentation/mobile-core/configuration"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/mobile-core/configuration/api-reference"
                                    }
                                ]
                            },
                            {
                                title: "Identity",
                                path: "documentation/mobile-core/identity",
                                pages: [{
                                        title: "Overview",
                                        path: "documentation/mobile-core/identity"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/mobile-core/identity/api-reference"
                                    },
                                    {
                                        title: "Migration",
                                        path: "documentation/mobile-core/identity/migration"
                                    }
                                ]
                            },
                            {
                                title: "Lifecycle",
                                path: "documentation/mobile-core/lifecycle",
                                pages: [{
                                        title: "Overview",
                                        path: "documentation/mobile-core/lifecycle"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/mobile-core/lifecycle/api-reference"
                                    },
                                    {
                                        title: "Migration",
                                        path: "documentation/mobile-core/lifecycle/migration"
                                    },
                                    {
                                        title: "Metrics",
                                        path: "documentation/mobile-core/lifecycle/metrics"
                                    }
                                ]
                            },
                            {
                                title: "Signal",
                                path: "documentation/mobile-core/signal",
                                pages: [{
                                        title: "Overview",
                                        path: "documentation/mobile-core/signal"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/mobile-core/signal/api-reference"
                                    },
                                    {
                                        title: "Migration",
                                        path: "documentation/mobile-core/signal/migration"
                                    }
                                ]
                            },
                            {
                                title: "API reference",
                                path: "documentation/mobile-core/api-reference"
                            },
                            {
                                title: "Migration",
                                path: "documentation/mobile-core/migration"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/mobile-core/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Platform Location Service",
                        path: "/documentation/places",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/places"
                            },
                            {
                                title: "API reference",
                                path: "documentation/places/api-reference.md"
                            },
                            {
                                title: "Migration",
                                path: "documentation/places/migration.md"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Platform Assurance",
                        path: "/documentation/platform-assurance-sdk",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/platform-assurance-sdk"
                            },
                            {
                                title: "Migration",
                                path: "/documentation/platform-assurance-sdk/migration"
                            },
                            {
                                title: "API reference",
                                path: "/documentation/platform-assurance-sdk/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/documentation/platform-assurance-sdk/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Profile",
                        path: "/documentation/profile",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/profile"
                            },
                            {
                                title: "Migration",
                                path: "documentation/profile/migration"
                            },
                            {
                                title: "API reference",
                                path: "documentation/profile/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/profile/release-notes"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Experience Cloud extensions",
                path: "/documentation/experience-cloud-extensions",
                pages: [{
                        title: "Overview",
                        path: "/documentation/experience-cloud-extensions"
                    },
                    {
                        title: 'Adobe Analytics',
                        path: '/documentation/adobe-analytics/',
                        pages: [{
                                title: "Overview",
                                path: "/documentation/adobe-analytics"
                            },
                            {
                                title: "API reference",
                                path: "/documentation/adobe-analytics/api-reference/"
                            },
                            {
                                title: "Migration",
                                path: "/documentation/adobe-analytics/migration/"
                            },
                            {
                                title: 'Release Notes',
                                path: '/documentation/adobe-analytics/release-notes/'
                            }
                        ]
                    },
                    {
                        title: "Adobe Analytics - Mobile Services",
                        path: "/documentation/adobe-analytics-mobile-services",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/adobe-analytics-mobile-services"
                            },
                            {
                                title: "API reference",
                                path: "/documentation/adobe-analytics-mobile-services/api-reference/"
                            },
                            {
                                title: "Migration",
                                path: "/documentation/adobe-analytics-mobile-services/migration/"
                            },
                            {
                                title: "Release notes",
                                path: "/documentation/adobe-analytics-mobile-services/release-notes/"
                            }
                        ]
                    },
                    {
                        title: "Adobe Media Analytics",
                        path: "/documentation/adobe-media-analytics",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/adobe-media-analytics"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-media-analytics/api-reference"
                            },
                            {
                                title: "Migration",
                                path: "documentation/adobe-media-analytics/migration"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/adobe-media-analytics/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Audience Manager",
                        path: "/documentation/adobe-audience-manager/",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/adobe-audience-manager/"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-audience-manager/api-reference"
                            },
                            {
                                title: "Migration",
                                path: "documentation/adobe-audience-manager/migration"
                            },
                            {
                                title: "Release notes",
                                path: "/documentation/adobe-audience-manager/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Campaign Classic",
                        path: "/documentation/adobe-campaign-classic",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/adobe-campaign-classic"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-campaign-classic/api-reference"
                            },
                            {
                                title: "Migration",
                                path: "documentation/adobe-campaign-classic/migration"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/adobe-campaign-classic/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Campaign Standard",
                        path: "/documentation/adobe-campaign-standard",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/adobe-campaign-standard"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-campaign-standard/api-reference"
                            },
                            {
                                title: "Migration",
                                path: "documentation/adobe-campaign-standard/migration"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/adobe-campaign-standard/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Target",
                        path: "/documentation/adobe-target",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/adobe-target"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-target/api-reference"
                            },
                            {
                                title: "Migration",
                                path: "documentation/adobe-target/migration"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/adobe-target/release-notes"
                            },
                            {
                                title: "Deprecated APIs",
                                path: "documentation/adobe-target/deprecated-apis"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Resources",
                path: "/documentation/resources",
                pages: [{
                        title: "Overview",
                        path: "/documentation/resources"
                    },
                    {
                        title: "Upgrade to the Experience Platform SDKs",
                        path: "documentation/upgrade-platform-sdks",
                        pages: [{
                                title: "Overview",
                                path: "documentation/upgrade-platform-sdks"
                            },
                            {
                                title: "SDK comparison",
                                path: "documentation/upgrade-platform-sdks/comparison"
                            },
                            {
                                title: "Manual Lifecycle implementation",
                                path: "documentation/upgrade-platform-sdks/lifecycle"
                            },
                            {
                                title: "API changelog",
                                path: "documentation/upgrade-platform-sdks/api-changelog.md"
                            },
                            {
                                title: "Analytics migration",
                                path: "documentation/upgrade-platform-sdks/analytics-comparison.md"
                            }
                        ]
                    },
                    {
                        title: "Privacy and GDPR",
                        path: "documentation/privacy-and-gdpr"
                    },
                    {
                        title: "Migrate to Swift",
                        path: "documentation/migrate-to-swift"
                    }
                ]
            }
        ]
    },
    plugins: [`@adobe/gatsby-theme-aio`]
};

/**
 * UniqueCart Settings for the app,
 * Follow instructions: https://github.com/sanjeevyadavIT/UniqueCart_react_native/wiki/Setup
 */
interface UniqueCartStoreConfig {
    url: string; // Base url of the UniqueCart website
    home_cms_block_id: number; // Block id which contain json data, which will be shown in Home screen
    store: string; // store code -> Stores > All Stores > Store View > Code
    password_reset_template: string; // Email template name in UniqueCart backend, use for sending password reset e-mail
    authentication: {
        integration: {
            access_token: string; // Token to access UniqueCart API, without it app won't work
        };
    };
}

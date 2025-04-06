const baseStoreConfig: Partial<UniqueCartStoreConfig> = {
    home_cms_block_id: 19, // required int
    store: 'default',
    password_reset_template: 'email_reset', // This is required in order to reset password link to work
};

export default baseStoreConfig;

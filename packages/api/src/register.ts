/* eslint-disable @typescript-eslint/unbound-method */
import { SapphireClient } from '@sapphire/framework';
import { Api } from './lib/Api';

SapphireClient.plugins.registerPreGenericsInitializationHook(Api.preGenericsInitializationHook);

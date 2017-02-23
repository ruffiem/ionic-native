/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import { Plugin, Cordova } from './plugin';

/**
 * @name AirWatchSDK
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { AirWatchSDK } from 'ionic-native';
 *
 * AirWatchSDK.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AirWatchSDK',
  plugin: 'airwatch-sdk-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'plugins.airwatch', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'none'
})
export class AirWatchSDK {

  /**
   * This function returns an event-handler function to receive events from the SDK
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  static setSDKEventListener(): Promise<any> { return; }

  /**
   * This function retuns the enrolled user's username
   * @return {Promise<string>} Returns a promise
   */
  @Cordova()
  static username(): Promise<string> { return; }

}

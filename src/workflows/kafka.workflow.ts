import { Request, Response } from "express";
import  kafka  from "kafka-node";
export const kafka_topic = "default";
export const kafka_server = "localhost:2181";

export let invokeWorkflow = (topic: string, message: any, req: Request, res: Response): Promise<any> => {

    /**
     * KAFKA PRODUCER
     */

    try {
        const Producer = kafka.Producer;
        const client = new kafka.KafkaClient();
        const producer = new Producer(client);
        const kafka_topic = topic;
        console.log(kafka_topic);
        const payloads = [
            {
                topic: kafka_topic,
                messages: message
            }
        ];

        producer.on("ready", async function () {
            const push_status = producer.send(payloads, (err: any, data: any) => {
                if (err) {
                    return new Promise((resolve, reject) => {

                        /** YOU CAN CUSTOM YOU ERROR MSG OR ADD AN GLOBAL ERROR HANDLING FUNCTION */
                        res.json(err);
                        res.statusCode = 401; /**Example*/
                        console.log("[kafka-producer -> " + kafka_topic + "]: broker update failed");
                        reject(err);


                    });
                } else {

                    return new Promise((resolve, reject) => {

                        /** YOU CAN CUSTOM YOU ERROR MSG OR ADD AN GLOBAL ERROR HANDLING FUNCTION */
                        console.log("[kafka-producer -> " + kafka_topic + "]: broker update failed");
                        resolve(kafka_topic);
                    });

                }
            });
        });

        producer.on("error", function (err: any) {
            return new Promise((resolve, reject) => {

                /** YOU CAN CUSTOM YOU ERROR MSG OR ADD AN GLOBAL ERROR HANDLING FUNCTION */
                res.json(err);
                res.statusCode = 401; /**Example*/
                console.log("[kafka-producer -> " + kafka_topic + "]: broker update failed");
                reject(err);

            });
        });
    }
    catch (err) {
        return new Promise((resolve, reject) => {

            /** YOU CAN CUSTOM YOU ERROR MSG OR ADD AN GLOBAL ERROR HANDLING FUNCTION */
            res.json(err);
            res.statusCode = 401; /**Example*/
            console.log("[kafka-producer -> " + kafka_topic + "]: broker update failed");
            reject(err);

        });
    }

};
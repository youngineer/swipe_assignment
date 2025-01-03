import { GoogleGenerativeAI } from "@google/generative-ai";
import { PROMPT } from "../../utils/constants";
import { handleAiResponse } from "./handleAiOutput";
import handleExcelFile from "./handleExcelFiles";

export const fetchApiResult = async (file, apiKey, dispatch) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = async (event) => {
        const base64Data = event.target.result.split(",")[1]; 
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });
  
        try {
          const result = await model.generateContent([
            {
              inlineData: {
                data: base64Data,
                mimeType: file.type,
              },
            },
            PROMPT,
          ]);
          resolve(result.response.text());
          return handleAiResponse(result.response.text(), dispatch);
        } catch (error) {
          console.error("Error generating content:", error);
          reject(error);
        }
      };
  
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  };


  export const fetchApiResultJson = async (data, apiKey, dispatch) => {
    console.log('fetchApiResultJson', data);
    
    return new Promise(async (resolve, reject) => {
      try {
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array of objects');
        }
  
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
        // Convert data to string and format for the API
        const prompt = PROMPT + JSON.stringify(data);
  
        const result = await model.generateContent({
          contents: [{
            role: 'user',
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        });
  
        const response = result.response.text();
        // handleAiResponse(response, dispatch);
        resolve(response);
        return response;
  
      } catch (error) {
        console.error('Error processing data:', error);
        reject(error);
        return null;
      }
    });
  };
  
  export default fetchApiResultJson;

  

// magnet:?xt=urn:btih:0094005D45D16ED779B2B091D87269E0AC166E68&dn=Low+Level+Academy+-+Zero2Hero+C+Programming&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fz.mercax.com%3A53%2Fannounce&tr=udp%3A%2F%2Fu6.trakx.crim.ist%3A1337%2Fannounce&tr=https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.lilithraws.org%3A443%2Fannounce&tr=https%3A%2F%2Ftrackers.mlsub.net%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.ipfsscan.io%3A443%2Fannounce&tr=udp%3A%2F%2Fd40969.acod.regrucolo.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Fttk2.nbaonlineservice.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fevan.im%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.yemekyedim.com%3A443%2Fannounce&tr=udp%3A%2F%2Fmartin-gebhardt.eu%3A25%2Fannounce&tr=udp%3A%2F%2Famigacity.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftaciturn-shadow.spb.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce
// magnet:?xt=urn:btih:B80ED9589E999C3426E4B1D30EC86068A8CF6C5B&dn=Low+Level+Academy+-+Multi+Threaded+C+Applications&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fz.mercax.com%3A53%2Fannounce&tr=udp%3A%2F%2Fu6.trakx.crim.ist%3A1337%2Fannounce&tr=https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.lilithraws.org%3A443%2Fannounce&tr=https%3A%2F%2Ftrackers.mlsub.net%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.ipfsscan.io%3A443%2Fannounce&tr=udp%3A%2F%2Fd40969.acod.regrucolo.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Fttk2.nbaonlineservice.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fevan.im%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.yemekyedim.com%3A443%2Fannounce&tr=udp%3A%2F%2Fmartin-gebhardt.eu%3A25%2Fannounce&tr=udp%3A%2F%2Famigacity.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftaciturn-shadow.spb.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce
// magnet:?xt=urn:btih:FAB772B35AAEDF205BFE58DF233B7A13DA737A27&dn=Low+Level+Academy+-+Network+Applications+in+C&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fz.mercax.com%3A53%2Fannounce&tr=udp%3A%2F%2Fu6.trakx.crim.ist%3A1337%2Fannounce&tr=https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.lilithraws.org%3A443%2Fannounce&tr=https%3A%2F%2Ftrackers.mlsub.net%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.ipfsscan.io%3A443%2Fannounce&tr=udp%3A%2F%2Fd40969.acod.regrucolo.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Fttk2.nbaonlineservice.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fevan.im%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.yemekyedim.com%3A443%2Fannounce&tr=udp%3A%2F%2Fmartin-gebhardt.eu%3A25%2Fannounce&tr=udp%3A%2F%2Famigacity.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftaciturn-shadow.spb.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce
// magnet:?xt=urn:btih:46164EFB2EFC51E87B0851758346C17DA53B151E&dn=Low+Level+Academy+-+Fundamentals+of+ARM+Assembly&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fz.mercax.com%3A53%2Fannounce&tr=udp%3A%2F%2Fu6.trakx.crim.ist%3A1337%2Fannounce&tr=https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.lilithraws.org%3A443%2Fannounce&tr=https%3A%2F%2Ftrackers.mlsub.net%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.ipfsscan.io%3A443%2Fannounce&tr=udp%3A%2F%2Fd40969.acod.regrucolo.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Fttk2.nbaonlineservice.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fevan.im%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.yemekyedim.com%3A443%2Fannounce&tr=udp%3A%2F%2Fmartin-gebhardt.eu%3A25%2Fannounce&tr=udp%3A%2F%2Famigacity.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftaciturn-shadow.spb.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce

package opensource.example.subject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

public class SomeService {

    private final RestTemplate restTemplate;

    @Autowired
    public SomeService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String callExternalService() {
        String url = "http://api.external.com/data";
        return restTemplate.getForObject(url, String.class);
    }
}

package opensource.example.subject.service;

import opensource.example.subject.model.YourObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class VolunteerService {

    private final RestTemplate restTemplate;

    @Autowired
    public VolunteerService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public YourObject getSomeDataFromAPI() {
        String url = "https://api.example.com/data";
        try {
            return restTemplate.getForObject(url, YourObject.class);
        } catch (Exception e) {
            // 적절한 예외 처리
            // 로깅을 추가할 수 있습니다.
            // e.printStackTrace(); // 로깅을 위한 예시 코드
            // 실제로는 로그를 파일에 기록하거나, 알림 시스템을 트리거하는 등의 조치를 취하는 것이 좋습니다.
            return null;
        }
    }

    public YourObject getSomeDataFromAPIWithHeaders() {
        String url = "https://api.example.com/data";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer your_api_key");

        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        ResponseEntity<YourObject> response = restTemplate.exchange(
                url, HttpMethod.GET, entity, YourObject.class);

        return response.getBody();
    }
}

